import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AvailabilityQueryDto } from './dto/availability-query.dto';

const BOOKING_SELECT = `
  SELECT
    b.booking_id AS "id",
    b.guest_id AS "guestId",
    b.property_id AS "propertyId",
    to_char(b.check_in, 'YYYY-MM-DD') AS "checkIn",
    to_char(b.check_out, 'YYYY-MM-DD') AS "checkOut",
    b.guests AS "guests",
    b.total_price AS "totalPrice",
    b.status AS "status",
    b.created_at AS "createdAt",
    p.title AS "propertyTitle",
    h.user_id AS "hostUserId"
  FROM bookings b
  JOIN properties p ON p.property_id = b.property_id
  LEFT JOIN hosts h ON h.host_id = p.host_id
`;

export interface BookingRow {
  id: number;
  guestId: number;
  propertyId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: string;
  status: string;
  createdAt: Date;
  propertyTitle: string;
  hostUserId: number | null;
}

export interface BookingResponse {
  id: number;
  guestId: number;
  propertyId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: string;
  status: string;
  createdAt: Date;
  propertyTitle: string;
}

export interface PropertyRow {
  pricePerNight: string;
  maxGuests: number | null;
  hostUserId: number | null;
}

export interface BookedRange {
  checkIn: string;
  checkOut: string;
}

export interface AvailabilityResponse {
  propertyId: number;
  bookedRanges: BookedRange[];
  available?: boolean;
}

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingsRepository: Repository<Booking>,
    private readonly dataSource: DataSource,
  ) {}

  private validateDates(checkIn: string, checkOut: string): void {
    const today = new Date().toISOString().slice(0, 10);
    if (checkIn < today) {
      throw new BadRequestException('Check-in date cannot be in the past');
    }
    if (checkOut <= checkIn) {
      throw new BadRequestException('Check-out must be after check-in');
    }
  }

  private toResponse(row: BookingRow): BookingResponse {
    return {
      id: row.id,
      guestId: row.guestId,
      propertyId: row.propertyId,
      checkIn: row.checkIn,
      checkOut: row.checkOut,
      guests: row.guests,
      totalPrice: row.totalPrice,
      status: row.status,
      createdAt: row.createdAt,
      propertyTitle: row.propertyTitle,
    };
  }

  private async isRangeFree(
    propertyId: number,
    checkIn: string,
    checkOut: string,
  ): Promise<boolean> {
    const count = await this.bookingsRepository
      .createQueryBuilder('b')
      .where('b.propertyId = :propertyId', { propertyId })
      .andWhere('b.status != :cancelled', { cancelled: 'CANCELLED' })
      .andWhere('b.checkIn < :checkOut AND b.checkOut > :checkIn', {
        checkIn,
        checkOut,
      })
      .getCount();
    return count === 0;
  }

  async create(userId: number, dto: CreateBookingDto): Promise<Booking> {
    const checkIn = dto.checkIn.slice(0, 10);
    const checkOut = dto.checkOut.slice(0, 10);
    this.validateDates(checkIn, checkOut);

    const rows: PropertyRow[] = await this.dataSource.query(
      `SELECT p.pricepernight AS "pricePerNight",
              p.guests AS "maxGuests",
              h.user_id AS "hostUserId"
       FROM properties p
       LEFT JOIN hosts h ON h.host_id = p.host_id
       WHERE p.property_id = $1`,
      [dto.propertyId],
    );

    const property = rows[0];
    if (!property) {
      throw new NotFoundException('Property not found');
    }
    if (property.hostUserId === userId) {
      throw new ForbiddenException('You cannot book your own property');
    }
    if (property.maxGuests !== null && dto.guests > property.maxGuests) {
      throw new BadRequestException(
        `This property allows up to ${property.maxGuests} guests`,
      );
    }

    const free = await this.isRangeFree(dto.propertyId, checkIn, checkOut);
    if (!free) {
      throw new ConflictException('Property is not available for these dates');
    }

    const nights = Math.round(
      (Date.parse(checkOut) - Date.parse(checkIn)) / 86400000,
    );
    const totalPrice = (Number(property.pricePerNight) * nights).toFixed(2);

    const booking = this.bookingsRepository.create({
      guestId: userId,
      propertyId: dto.propertyId,
      checkIn,
      checkOut,
      guests: dto.guests,
      totalPrice,
      status: 'PENDING',
    });
    return this.bookingsRepository.save(booking);
  }

  async findMy(userId: number): Promise<BookingResponse[]> {
    const rows: BookingRow[] = await this.dataSource.query(
      `${BOOKING_SELECT} WHERE b.guest_id = $1 ORDER BY b.created_at DESC`,
      [userId],
    );
    return rows.map((row) => this.toResponse(row));
  }

  async findOne(userId: number, bookingId: number): Promise<BookingResponse> {
    const rows: BookingRow[] = await this.dataSource.query(
      `${BOOKING_SELECT} WHERE b.booking_id = $1`,
      [bookingId],
    );

    const row = rows[0];
    if (!row) {
      throw new NotFoundException('Booking not found');
    }
    if (row.guestId !== userId && row.hostUserId !== userId) {
      throw new ForbiddenException('You cannot access this booking');
    }
    return this.toResponse(row);
  }

  async cancel(userId: number, bookingId: number): Promise<Booking> {
    const booking = await this.bookingsRepository.findOne({
      where: { id: bookingId },
    });
    if (!booking) {
      throw new NotFoundException('Booking not found');
    }
    if (booking.guestId !== userId) {
      throw new ForbiddenException('You can only cancel your own bookings');
    }
    if (booking.status === 'CANCELLED') {
      throw new ConflictException('Booking is already cancelled');
    }

    const today = new Date().toISOString().slice(0, 10);
    if (booking.checkIn <= today) {
      throw new BadRequestException(
        'Cannot cancel a booking that has already started',
      );
    }

    booking.status = 'CANCELLED';
    return this.bookingsRepository.save(booking);
  }

  async availability(
    propertyId: number,
    query: AvailabilityQueryDto,
  ): Promise<AvailabilityResponse> {
    const exists: unknown[] = await this.dataSource.query(
      'SELECT 1 FROM properties WHERE property_id = $1',
      [propertyId],
    );
    if (exists.length === 0) {
      throw new NotFoundException('Property not found');
    }

    const bookedRanges: BookedRange[] = await this.dataSource.query(
      `SELECT to_char(check_in, 'YYYY-MM-DD') AS "checkIn",
              to_char(check_out, 'YYYY-MM-DD') AS "checkOut"
       FROM bookings
       WHERE property_id = $1
         AND status <> 'CANCELLED'
         AND check_out >= CURRENT_DATE
       ORDER BY check_in`,
      [propertyId],
    );

    const result: AvailabilityResponse = { propertyId, bookedRanges };

    if (query.checkIn && query.checkOut) {
      const checkIn = query.checkIn.slice(0, 10);
      const checkOut = query.checkOut.slice(0, 10);
      this.validateDates(checkIn, checkOut);
      result.available = await this.isRangeFree(propertyId, checkIn, checkOut);
    }

    return result;
  }
}
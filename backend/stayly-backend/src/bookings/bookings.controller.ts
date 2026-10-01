import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';

import {
  AvailabilityResponse,
  BookingResponse,
  BookingsService,
} from './bookings.service';

import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AvailabilityQueryDto } from './dto/availability-query.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { PaymentsService } from '../payments/payments.service';

interface AuthRequest {
  user: {
    userId: number;
  };
}

@ApiTags('bookings')
@Controller()
export class BookingsController {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly paymentsService: PaymentsService,
  ) {}

  @Post('bookings')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(
    @Req() req: AuthRequest,
    @Body() dto: CreateBookingDto,
  ): Promise<Booking> {
    return this.bookingsService.create(
      req.user.userId,
      dto,
    );
  }

  @Get('bookings/my')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findMy(
    @Req() req: AuthRequest,
  ): Promise<BookingResponse[]> {
    return this.bookingsService.findMy(
      req.user.userId,
    );
  }

  @Get('bookings/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(
    @Req() req: AuthRequest,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BookingResponse> {
    return this.bookingsService.findOne(
      req.user.userId,
      id,
    );
  }

  @Patch('bookings/:id/cancel')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  cancel(
    @Req() req: AuthRequest,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Booking> {
    return this.bookingsService.cancel(
      req.user.userId,
      id,
    );
  }

  @Get('properties/:id/availability')
  availability(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: AvailabilityQueryDto,
  ): Promise<AvailabilityResponse> {
    return this.bookingsService.availability(
      id,
      query,
    );
  }

  @Get('bookings/:id/payment')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getPayment(
    @Req() req: AuthRequest,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.paymentsService.findByBookingId(id);
  }
}


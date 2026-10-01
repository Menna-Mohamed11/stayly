import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { AddToWishlistDto } from './dto/add-wishlist.dto';

export interface WishlistItemResponse {
  id: number;
  propertyId: number;
  createdAt: Date;
  title: string;
  pricePerNight: string;
  propertyType: string | null;
  city: string | null;
  image: string | null;
  rating: string | null;
}

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
    private readonly dataSource: DataSource,
  ) {}

  async findMy(userId: number) {
    const rows: WishlistItemResponse[] = await this.dataSource.query(
      `SELECT
         w.id AS "id",
         w.property_id AS "propertyId",
         w.created_at AS "createdAt",
         p.title AS "title",
         p.pricepernight AS "pricePerNight",
         p.propertytype AS "propertyType",
         l.city AS "city",
         (SELECT pi.imageurl
            FROM property_images pi
           WHERE pi.property_id = p.property_id
           ORDER BY pi.img_id
           LIMIT 1) AS "image",
         (SELECT ROUND(AVG(r.rating), 1)
            FROM reviews r
           WHERE r.property_id = p.property_id) AS "rating"
       FROM wishlist w
       JOIN properties p ON p.property_id = w.property_id
       LEFT JOIN locations l ON l.property_id = p.property_id
       WHERE w.user_id = $1
       ORDER BY w.created_at DESC`,
      [userId],
    );
    return rows;
  }

  async add(userId: number, dto: AddToWishlistDto) {
    const property: unknown[] = await this.dataSource.query(
      'SELECT 1 FROM properties WHERE property_id = $1',
      [dto.propertyId],
    );
    if (property.length === 0) {
      throw new NotFoundException('Property not found');
    }

    const existing = await this.wishlistRepository.findOne({
      where: { userId, propertyId: dto.propertyId },
    });
    if (existing) {
      throw new ConflictException('Property is already in your wishlist');
    }

    const item = this.wishlistRepository.create({
      userId,
      propertyId: dto.propertyId,
    });
    return this.wishlistRepository.save(item);
  }

  async remove(userId: number, propertyId: number) {
    const result = await this.wishlistRepository.delete({ userId, propertyId });
    if (!result.affected) {
      throw new NotFoundException('Property is not in your wishlist');
    }
    return { message: 'Removed from wishlist' };
  }
}
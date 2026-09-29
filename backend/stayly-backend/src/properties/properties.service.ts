import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Property } from './entities/property.entity';
import { SearchPropertyDto } from './dto/search-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async findAll(): Promise<Property[]> {
    return this.propertyRepository.find();
  }

  async search(searchDto: SearchPropertyDto): Promise<Property[]> {
    const {
      city,
      guests,
      minPrice,
      maxPrice,
      bedrooms,
      propertyType,
    } = searchDto;

    const query = this.propertyRepository
      .createQueryBuilder('property');

    // Filter by city
    if (city) {
      query.andWhere(
        'LOWER(property.city) = LOWER(:city)',
        { city },
      );
    }

    // Filter by number of guests
    if (guests !== undefined) {
      query.andWhere(
        'property.maxGuests >= :guests',
        { guests },
      );
    }

    // Filter by minimum price
    if (minPrice !== undefined) {
      query.andWhere(
        'property.pricePerNight >= :minPrice',
        { minPrice },
      );
    }

    // Filter by maximum price
    if (maxPrice !== undefined) {
      query.andWhere(
        'property.pricePerNight <= :maxPrice',
        { maxPrice },
      );
    }

    // Filter by number of bedrooms
    if (bedrooms !== undefined) {
      query.andWhere(
        'property.bedrooms >= :bedrooms',
        { bedrooms },
      );
    }

    // Filter by property type
    if (propertyType) {
      query.andWhere(
        'LOWER(property.propertyType) = LOWER(:propertyType)',
        { propertyType },
      );
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Property | null> {
    return this.propertyRepository.findOne({
      where: { id },
    });
  }
}
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
    const { city, guests } = searchDto;

    const query = this.propertyRepository
      .createQueryBuilder('property');

    if (city) {
      query.andWhere('LOWER(property.city) = LOWER(:city)', {
        city,
      });
    }

    if (guests) {
      query.andWhere('property.maxGuests >= :guests', {
        guests,
      });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Property | null> {
    return this.propertyRepository.findOne({
      where: { id },
    });
  }
}
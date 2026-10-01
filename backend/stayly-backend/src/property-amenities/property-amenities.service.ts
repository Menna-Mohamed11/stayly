import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PropertyAmenity } from './entities/property-amenity.entity';

@Injectable()
export class PropertyAmenitiesService {
  constructor(
    @InjectRepository(PropertyAmenity)
    private readonly repository: Repository<PropertyAmenity>,
  ) {}

  async findByProperty(propertyId: number) {
    return this.repository.find({
      where: { propertyId },
    });
  }

  async addAmenity(
    propertyId: number,
    amenityId: number,
  ) {
    const existing = await this.repository.findOne({
      where: {
        propertyId,
        amenityId,
      },
    });

    if (existing) {
      return existing;
    }

    const propertyAmenity = this.repository.create({
      propertyId,
      amenityId,
    });

    return this.repository.save(propertyAmenity);
  }

  async removeAmenity(
    propertyId: number,
    amenityId: number,
  ) {
    const result = await this.repository.delete({
      propertyId,
      amenityId,
    });

    if (result.affected === 0) {
      throw new NotFoundException(
        'Property amenity not found',
      );
    }

    return {
      message: 'Amenity removed from property',
    };
  }
}
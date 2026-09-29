import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async findByPropertyId(propertyId: number) {
    const location = await this.locationRepository.findOne({
      where: { id: propertyId },
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    return location;
  }

  async update(
    propertyId: number,
    data: Partial<Location>,
  ) {
    let location = await this.locationRepository.findOne({
      where: { id: propertyId },
    });

    if (!location) {
      location = this.locationRepository.create({
        id: propertyId,
        ...data,
      });
    } else {
      Object.assign(location, data);
    }

    return this.locationRepository.save(location);
  }
}
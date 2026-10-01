import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Amenity } from './entities/amenity.entity.js';

@Injectable()
export class AmenitiesService {
    constructor(
    @InjectRepository(Amenity)
    private readonly amenityRepository: Repository<Amenity>,
  ) {}

  async findAll(): Promise<Amenity[]> {
    return this.amenityRepository.find();
  }

  async findOne(amenityId: number): Promise<Amenity | null> {
    return this.amenityRepository.findOne({
      where: {amenityId},
    });
  }
}

import { Module } from '@nestjs/common';
import { AmenitiesService } from './amenities.service.js';
import { AmenitiesController } from './amenities.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amenity } from './entities/amenity.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Amenity])],
  providers: [AmenitiesService],
  controllers: [AmenitiesController]
})
export class AmenitiesModule {}

import { Module } from '@nestjs/common';
import { AmenitiesService } from './amenities.service.js';
import { AmenitiesController } from './amenities.controller.js';

@Module({
  providers: [AmenitiesService],
  controllers: [AmenitiesController]
})
export class AmenitiesModule {}

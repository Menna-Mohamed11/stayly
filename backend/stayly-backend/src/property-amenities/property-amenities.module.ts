import { Module } from '@nestjs/common';
import { PropertyAmenitiesService } from './property-amenities.service.js';
import { PropertyAmenitiesController } from './property-amenities.controller.js';

@Module({
  providers: [PropertyAmenitiesService],
  controllers: [PropertyAmenitiesController]
})
export class PropertyAmenitiesModule {}

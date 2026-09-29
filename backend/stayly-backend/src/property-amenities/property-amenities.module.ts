import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PropertyAmenity } from './entities/property-amenity.entity';
import { PropertyAmenitiesController } from './property-amenities.controller';
import { PropertyAmenitiesService } from './property-amenities.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PropertyAmenity]),
  ],
  controllers: [PropertyAmenitiesController],
  providers: [PropertyAmenitiesService],
})
export class PropertyAmenitiesModule {}
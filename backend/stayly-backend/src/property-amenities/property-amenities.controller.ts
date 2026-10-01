import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { PropertyAmenitiesService } from './property-amenities.service';

@Controller('properties')
export class PropertyAmenitiesController {
  constructor(
    private readonly service: PropertyAmenitiesService,
  ) {}

  @Get(':id/amenities')
  findAmenities(
    @Param('id', ParseIntPipe) propertyId: number,
  ) {
    return this.service.findByProperty(propertyId);
  }

  @Post(':id/amenities/:amenityId')
  addAmenity(
    @Param('id', ParseIntPipe) propertyId: number,
    @Param('amenityId', ParseIntPipe) amenityId: number,
  ) {
    return this.service.addAmenity(
      propertyId,
      amenityId,
    );
  }

  @Delete(':id/amenities/:amenityId')
  removeAmenity(
    @Param('id', ParseIntPipe) propertyId: number,
    @Param('amenityId', ParseIntPipe) amenityId: number,
  ) {
    return this.service.removeAmenity(
      propertyId,
      amenityId,
    );
  }
}
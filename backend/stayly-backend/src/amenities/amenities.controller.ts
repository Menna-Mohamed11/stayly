import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { AmenitiesService } from './amenities.service';

@Controller('amenities')
export class AmenitiesController {
  constructor(
    private readonly amenitiesService: AmenitiesService,
  ) {}

  @Get()
  findAll() {
    return this.amenitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.amenitiesService.findOne(id);
  }
}
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';

import { LocationsService } from './locations.service';

@Controller('properties')
export class LocationsController {
  constructor(
    private readonly locationsService: LocationsService,
  ) {}

  @Get(':id/location')
  findLocation(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.locationsService.findByPropertyId(id);
  }

  @Put(':id/location')
  updateLocation(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.locationsService.update(id, data);
  }
}
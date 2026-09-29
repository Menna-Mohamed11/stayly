import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';
import { SearchPropertyDto } from './dto/search-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(
    private readonly propertiesService: PropertiesService,
  ) {}

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get('search')
  search(@Query() searchDto: SearchPropertyDto) {
    return this.propertiesService.search(searchDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertiesService.findOne(id);
  }
}
import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service.js';
import { LocationsController } from './locations.controller.js';

@Module({
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}

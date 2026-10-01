import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service.js';
import { PropertiesController } from './properties.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Property])],
  providers: [PropertiesService],
  controllers: [PropertiesController]
})
export class PropertiesModule {}

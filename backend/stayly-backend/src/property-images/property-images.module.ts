import { Module } from '@nestjs/common';
import { PropertyImagesService } from './property-images.service.js';
import { PropertyImagesController } from './property-images.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property_image } from './entities/property-image.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Property_image])],
  providers: [PropertyImagesService],
  controllers: [PropertyImagesController]
})
export class PropertyImagesModule {}

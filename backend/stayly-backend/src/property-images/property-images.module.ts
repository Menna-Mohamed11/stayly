import { Module } from '@nestjs/common';
import { PropertyImagesService } from './property-images.service.js';
import { PropertyImagesController } from './property-images.controller.js';

@Module({
  providers: [PropertyImagesService],
  controllers: [PropertyImagesController]
})
export class PropertyImagesModule {}

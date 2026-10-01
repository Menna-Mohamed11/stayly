import { Controller, Get, Param, Post, Body,Delete } from '@nestjs/common';
import { PropertyImagesService } from './property-images.service.js';
import { CreatePropertyImageDto } from './dto/create-property-image.dto.js';

@Controller('properties/:propertyId/images')
export class PropertyImagesController {
    private readonly propertyImagesService: PropertyImagesService;
    constructor(propertyImagesService: PropertyImagesService) {
        this.propertyImagesService = propertyImagesService;
    }

    @Get()
    getPropertyImages(
        @Param('propertyId') propertyId: string,
    ) {
        return this.propertyImagesService.getPropertyImages(+propertyId);
    }

    @Post()
    create(@Param('propertyId') propertyId: string,
        @Body() createPropertyImageDto: CreatePropertyImageDto) {
        return this.propertyImagesService.create(+propertyId, createPropertyImageDto)
    }

    @Delete(':imageId')
    remove(
        @Param('propertyId') propertyId:string,
        @Param('imageId') imageId:string,
    ) {
        return this.propertyImagesService.remove(
            +propertyId,
            +imageId,
        );
    }

}

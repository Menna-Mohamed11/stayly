import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property_image } from './entities/property-image.entity.js';
import { CreatePropertyImageDto } from './dto/create-property-image.dto.js';

@Injectable()
export class PropertyImagesService {
    constructor(
        @InjectRepository(Property_image)
        private readonly propertyImageRepository: Repository<Property_image>,
    ) { }

    async getPropertyImages(propertyId: number) {
        const images = await this.propertyImageRepository.find({
            where: {
                propertyId,
            },
        });

        if (images.length === 0) {
            throw new NotFoundException(
                `No images found for property ${propertyId}`);
        }

        return images;
    }

    async create(
        propertyId: number,
        createPropertyImageDto: CreatePropertyImageDto,
    ) {
        const image = this.propertyImageRepository.create({
            propertyId,
            imageUrl: createPropertyImageDto.imageUrl
        });

        return this.propertyImageRepository.save(image);
    }

    async remove(
        propertyId: number,
        imageId: number,
    ) {
        const image = await this.propertyImageRepository.findOne({
            where: {
                imgId: imageId,
                propertyId,
            },
        });

        if (!image) {
            throw new NotFoundException(
                `Image ${imageId} not found for property ${propertyId}`,
            );
        }
        await this.propertyImageRepository.remove(image);

        return {
            message: 'Property image deleted successfully',
        };
    }
}

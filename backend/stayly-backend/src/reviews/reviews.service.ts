import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { UpdateReviewDto } from './dto/update-review.dto.js';

@Injectable()
export class ReviewsService {
    constructor(@InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>) { }
    async findAll(propertyId: number) {
        return this.reviewRepository.find({
            where: {
                propertyId
            },
            relations: {
                user: true
            },
        });
    }

    async create(createReviewDto: CreateReviewDto) {
        const review = this.reviewRepository.create(createReviewDto);
        return this.reviewRepository.save(review);
    }

    async update(
        id: number,
        updateReviewDto: UpdateReviewDto,
    ) {
        const review = await this.reviewRepository.findOne({
            where: {
                reviewId: id,
            }
        });

        if (!review) {
            throw new NotFoundException(
                `Review ${id} not found`,
            );
        }
        Object.assign(review, updateReviewDto);
        return this.reviewRepository.save(review);
    }

    async deleteReview(id: number) {
        const review = await this.reviewRepository.findOne({
            where: {
                reviewId: id,
            },
        });

        if (!review) {
            throw new NotFoundException(
                `Review ${id} not found`,
            );
        }
        await this.reviewRepository.remove(review);
        return {
            message: 'Review deleted successfully',
        };
    }
}

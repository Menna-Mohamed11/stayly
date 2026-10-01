import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { UpdateReviewDto } from './dto/update-review.dto.js';

@Controller('reviews')
export class ReviewsController {
    private readonly reviewsService: ReviewsService;
    constructor(reviewsService: ReviewsService) {
        this.reviewsService = reviewsService;
    }

    @Get('properties/:propertyId/reviews')
    findAll(
        @Param('propertyId') propertyId: string,) {
        return this.reviewsService.findAll(+propertyId);
    }

    @Post()
    create(@Body() createReviewDto: CreateReviewDto,) {
        return this.reviewsService.create(createReviewDto);
    }


    @Patch('reviews/:id')
    update(
        @Param('id') id: string,
        @Body() updateReviewDto: UpdateReviewDto,) {
        return this.reviewsService.update(+id, updateReviewDto);
    }

    @Delete('reviews/:id')
    deleteReview(
        @Param('id') id: string,
    ) {
        return this.reviewsService.deleteReview(+id);
    }

}

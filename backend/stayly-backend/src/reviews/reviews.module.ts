import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service.js';
import { ReviewsController } from './reviews.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Review])],
  providers: [ReviewsService],
  controllers: [ReviewsController]
})
export class ReviewsModule {}

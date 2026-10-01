import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Booking } from './entities/booking.entity';

import { BookingsService } from './bookings.service';

import { BookingsController } from './bookings.controller';

import { PaymentsModule } from '../payments/payments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking]),
    PaymentsModule,
  ],

  controllers: [
    BookingsController,
  ],

  providers: [
    BookingsService,
  ],

  exports: [
    BookingsService,
    TypeOrmModule,
  ],
})
export class BookingsModule {}
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const existingPayment =
      await this.paymentRepository.findOne({
        where: {
          bookingId: createPaymentDto.bookingId,
        },
      });

    if (existingPayment) {
      return existingPayment;
    }

    const payment =
      this.paymentRepository.create({
        bookingId: createPaymentDto.bookingId,
        amount: createPaymentDto.amount,
        paymentMethod:
          createPaymentDto.paymentMethod,
        status: 'pending',
      });

    return this.paymentRepository.save(payment);
  }

  async findOne(id: number) {
    const payment =
      await this.paymentRepository.findOne({
        where: {
          id,
        },
      });

    if (!payment) {
      throw new NotFoundException(
        'Payment not found',
      );
    }

    return payment;
  }

  async findByBookingId(bookingId: number) {
    const payment =
      await this.paymentRepository.findOne({
        where: {
          bookingId,
        },
      });

    if (!payment) {
      throw new NotFoundException(
        'Payment not found for this booking',
      );
    }

    return payment;
  }
}
import {
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsPositive()
  bookingId: number;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  paymentMethod: string;
}
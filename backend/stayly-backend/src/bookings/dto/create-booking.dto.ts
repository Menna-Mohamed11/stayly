import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, Min } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty()
  @IsInt()
  propertyId: number;

  @ApiProperty()
  @IsDateString()
  checkIn: string;

  @ApiProperty()
  @IsDateString()
  checkOut: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  guests: number;
}
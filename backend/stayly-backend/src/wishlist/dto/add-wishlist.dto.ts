import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class AddToWishlistDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  propertyId: number;
}
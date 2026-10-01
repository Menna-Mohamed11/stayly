import { IsNumber, IsString , Max,Min} from "class-validator";

export class CreateReviewDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  
  @IsString()
  comment: string;

  @IsNumber()
  propertyId: number;

  @IsNumber()
  userId: number;
}
import { IsString , IsNotEmpty} from 'class-validator'
export class CreatePropertyImageDto {
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
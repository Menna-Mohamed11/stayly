import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { WishlistService } from './wishlist.service';
import { AddToWishlistDto } from './dto/add-wishlist.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

interface AuthRequest {
  user: { userId: number };
}

@ApiTags('wishlist')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  findMy(@Req() req: AuthRequest) {
    return this.wishlistService.findMy(req.user.userId);
  }

  @Post()
  add(@Req() req: AuthRequest, @Body() dto: AddToWishlistDto) {
    return this.wishlistService.add(req.user.userId, dto);
  }

  @Delete(':propertyId')
  remove(
    @Req() req: AuthRequest,
    @Param('propertyId', ParseIntPipe) propertyId: number,
  ) {
    return this.wishlistService.remove(req.user.userId, propertyId);
  }
}
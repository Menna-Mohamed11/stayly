import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getMe(@Req() req: { user: { userId: number } }) {
    const user = await this.usersService.findById(req.user.userId);
    const { password, ...safeUser } = user;
    return safeUser;
  }

  @Patch('me')
  async updateMe(
    @Req() req: { user: { userId: number } },
    @Body() dto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(req.user.userId, dto);
    const { password, ...safeUser } = user;
    return safeUser;
  }
}
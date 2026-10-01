import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HostsService } from './hosts.service';
import { CreateHostDto } from './dto/create-host.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
@ApiTags('hosts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('hosts')
export class HostsController {
  constructor(private readonly hostsService: HostsService) {}

  @Post()
  create(
    @Req() req: { user: { userId: number } },
    @Body() dto: CreateHostDto,
  ) {
    return this.hostsService.create(req.user.userId, dto);
  }

  @Get('me')
  findMe(@Req() req: { user: { userId: number } }) {
    return this.hostsService.findMe(req.user.userId);
  }
}
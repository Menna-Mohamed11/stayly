import { Module } from '@nestjs/common';
import { HostsService } from './hosts.service.js';
import { HostsController } from './hosts.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Host } from './entities/host.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Host])],
  providers: [HostsService],
  controllers: [HostsController]
})
export class HostsModule {}

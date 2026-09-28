import { Module } from '@nestjs/common';
import { HostsService } from './hosts.service.js';
import { HostsController } from './hosts.controller.js';

@Module({
  providers: [HostsService],
  controllers: [HostsController]
})
export class HostsModule {}

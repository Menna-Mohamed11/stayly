import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Host } from './entities/host.entity';
import { User } from '../users/entities/user.entity';
import { HostsService } from './hosts.service';
import { HostsController } from './hosts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Host, User])],
  controllers: [HostsController],
  providers: [HostsService],
  exports: [HostsService, TypeOrmModule],
})
export class HostsModule {}
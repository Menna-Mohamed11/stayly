import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Host } from './entities/host.entity.js';
import { User } from '../users/entities/user.entity.js';
import { CreateHostDto } from './dto/create-host.dto.js';

@Injectable()
export class HostsService {
  constructor(
    @InjectRepository(Host)
    private readonly hostsRepository: Repository<Host>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userId: number, dto: CreateHostDto) {
    const existing = await this.hostsRepository.findOne({ where: { userId } });
    if (existing) {
      throw new ConflictException('You are already a host');
    }

    const host = await this.hostsRepository.save(
      this.hostsRepository.create({
        userId,
        bio: dto.bio ?? null,
        profileImage: dto.profileImage ?? null,
      }),
    );

    await this.usersRepository.update({ userId }, { role: 'HOST' });

    return host;
  }

  async findMe(userId: number) {
    const host = await this.hostsRepository.findOne({
      where: { userId },
      relations: { user: true },
    });
    if (!host) {
      throw new NotFoundException('You are not a host yet');
    }

    const { password, ...safeUser } = host.user;
    return { ...host, user: safeUser };
  }
}
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'hosts' })
export class Host {
  @PrimaryGeneratedColumn({ name: 'host_id' })
  id: number;

  @Column({ name: 'user_id', type: 'int', unique: true })
  userId: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'text', nullable: true })
  bio: string | null;

  @Column({ name: 'profile_image', type: 'varchar', length: 255, nullable: true })
  profileImage: string | null;

  @CreateDateColumn({ name: 'host_since', type: 'timestamp' })
  hostSince: Date;
}
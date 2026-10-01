import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingId: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
  })
  amount: number;

  @Column()
  paymentMethod: string;

  @Column({
    default: 'pending',
  })
  status: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
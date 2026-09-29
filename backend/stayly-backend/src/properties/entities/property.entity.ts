import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pricePerNight: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  rating: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column({ default: 1 })
  maxGuests: number;

  @Column({ default: 1 })
  bedrooms: number;

  @Column({ default: 1 })
  beds: number;

  @Column({ default: 1 })
  bathrooms: number;

  @Column({ nullable: true })
  image: string;
}
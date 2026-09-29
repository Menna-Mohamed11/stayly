import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('amenities')
export class Amenity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
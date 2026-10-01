import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn,type Relation} from 'typeorm'
import { User } from '../../users/entities/user.entity.js'
import { Property } from '../../properties/entities/property.entity.js'


@Entity('reviews')
export class Review{
    @PrimaryGeneratedColumn({ name: 'review_id' })
  reviewId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'property_id' })
  propertyId: number;

  @Column()
  rating: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;


  // Many reviews can belong to one User
  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;


  // Many reviews can belong to one Property
  @ManyToOne(() => Property, (property) => property.reviews)
  @JoinColumn({ name: 'property_id' })
  property: Relation<Property>;
}
import {Entity, PrimaryGeneratedColumn,Column,JoinColumn,OneToMany,OneToOne,type Relation} from 'typeorm'
import { Host } from '../../hosts/entities/host.entity.js';
import { Review } from '../../reviews/entities/review.entity.js';

@Entity('users')
export class User{
    @PrimaryGeneratedColumn({name:'user_id'})
    userId:number;

    @Column({name:'first_name',length:100})
    firstName:string;

    @Column({name:'last_name',length:100})
    lastName:string;

    @Column({unique:true,length:255})
    email:string;

    @Column({length:255})
    password:string;

    @Column({ length: 30, nullable: true })
    phone: string;

    @Column({length: 20,default: 'USER',})
    role: string;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;

    // One User can have one Host profile
    @OneToOne(() => Host, (host) => host.user)
    host: Relation<Host>;


   // One User can write many Reviews
   @OneToMany(() => Review, (review) => review.user)
   reviews: Relation<Review>[];
}
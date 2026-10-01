import {Entity , PrimaryGeneratedColumn,Column,JoinColumn,OneToMany,ManyToOne,OneToOne,type Relation} from 'typeorm'
import { Property } from '../../properties/entities/property.entity.js';
import { User } from '../../users/entities/user.entity.js';

@Entity('hosts')
export class Host{
    @PrimaryGeneratedColumn({name:'host_id'})
    hostId:number;

    @Column({name:'user_id'})
    userId:number;

    @Column({type:'text'})
    bio:string;

    @Column({name:'profile_image', nullable:true})
    profileImage:string;

    @Column({name:'host_since'})
    hostSince:Date;

    @OneToMany(()=> Property,(property) => property.host)
    properties:Property[];

    @OneToOne(()=> User,(user)=>user.host)
    user:Relation<User>;
}
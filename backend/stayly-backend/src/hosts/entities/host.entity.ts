import {Entity , PrimaryGeneratedColumn,Column,JoinColumn,OneToMany,ManyToOne,OneToOne,type Relation} from 'typeorm'
import { Property } from '../../properties/entities/property.entity.js';
import { User } from '../../users/entities/user.entity.js';

@Entity('hosts')
export class Host{
    @PrimaryGeneratedColumn({name:'host_id'})
    hostId:number;

    @Column({name:'user_id'})
    userId:number;

    @Column({type:'text',nullable:true})
    bio:string|null;

    @Column({name:'profile_image',type: 'varchar', nullable:true})
    profileImage:string|null;

    @Column({name:'host_since',type: 'timestamp'})
    hostSince:Date;

    @OneToMany(()=> Property,(property) => property.host)
    properties:Property[];

    @OneToOne(()=> User,(user)=>user.host)
    @JoinColumn({ name: 'user_id' })
    user:Relation<User>;
}
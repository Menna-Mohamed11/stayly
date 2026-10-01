import {Entity , PrimaryGeneratedColumn , Column , ManyToMany} from 'typeorm'
import { Property } from '../../properties/entities/property.entity.js'

@Entity('amenities')
export class Amenity{
    @PrimaryGeneratedColumn({name:'amenity_id'})
    amenityId:number;

    @Column({name:'amenity_name',unique:true})
    amenityName:string;

    @ManyToMany(()=> Property,(property)=> property.amenities)
    properties:Property[];
}
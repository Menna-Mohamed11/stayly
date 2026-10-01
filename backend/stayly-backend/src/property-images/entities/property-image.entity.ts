import {Entity , Column,PrimaryGeneratedColumn, JoinColumn,ManyToOne, type Relation} from 'typeorm'
import { Property } from '../../properties/entities/property.entity.js'

@Entity('property_images')
export class Property_image{
    @PrimaryGeneratedColumn({name:'img_id'})
    imgId:number;

    @Column({name:'property_id'})
    propertyId:number;

    @Column({name:'imageurl'})
    imageUrl:string;

    @ManyToOne(()=> Property,(property)=>property.images)
    @JoinColumn({name:'property_id'})
    property:Relation<Property>;
}

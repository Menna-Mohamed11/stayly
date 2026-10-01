import {Entity , Column ,PrimaryGeneratedColumn, OneToOne,JoinColumn,type Relation} from 'typeorm'
import { Property } from '../../properties/entities/property.entity.js'

@Entity('locations')
export class Location{
    @PrimaryGeneratedColumn({name:'location_id'})
    locationId:number;

    @Column({name:'property_id',unique:true})
    propertyId:number;

    @Column('decimal',{precision:9,scale:6})
    latitude:number;

    @Column('decimal',{precision:9,scale:6})
    longitude:number;

    @Column({length:255})
    address:string;

    @Column({length:100})
    city:string;

    @Column({length:100})
    country:string;

    @Column({name:'map_url',nullable:true})
    mapUrl:string;

    @OneToOne(()=> Property,(property)=> property.location)
    @JoinColumn({name:'property_id'})
    property:Relation<Property>;
}
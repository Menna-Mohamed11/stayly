import { text } from 'stream/consumers';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, JoinColumn, JoinTable ,type Relation} from 'typeorm'
import { Host } from '../../hosts/entities/host.entity.js';
import { Property_image } from '../../property-images/entities/property-image.entity.js';
import { Amenity } from '../../amenities/entities/amenity.entity.js';
import { Location } from '../../locations/entities/location.entity.js';
import { Review } from '../../reviews/entities/review.entity.js';

@Entity('properties')
export class Property {
    @PrimaryGeneratedColumn({ name: 'property_id' })
    propertyId: number;

    @Column({ name: 'host_id' })
    hostId: number;

    @Column({ length: 100 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ name: 'pricepernight', type: 'numeric', precision: 10, scale: 2 })
    pricePerNight: number;

    @Column()
    guests: number;

    @Column()
    bedrooms: number;

    @Column()
    beds: number;

    @Column()
    bathrooms: number;

    @Column({ name: 'propertytype' })
    propertyType: string;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => Host, (host) => host.properties)
    @JoinColumn({ name: 'host_id' })
    host: Relation<Host>;

    @OneToMany(() => Property_image, (property_image) => property_image.property)
    images: Property_image[];

    @ManyToMany(() => Amenity, (amenity) => amenity.properties)
    @JoinTable({
        name: 'property_amenities',
        joinColumn: {
            name: 'property_id',
            referencedColumnName: 'propertyId',
        },
        inverseJoinColumn: {
            name: 'amenity_id',
            referencedColumnName: 'amenityId',
        },
    })
    amenities: Amenity[];

    @OneToOne(()=> Location,(location)=> location.property)
    location :Relation<Location>;

    @OneToMany(()=>Review,(review)=>review.property)
    reviews:Review[];

}
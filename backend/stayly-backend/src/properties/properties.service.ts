import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity.js';

@Injectable()
export class PropertiesService {
    constructor(@InjectRepository(Property)
    private readonly PropertyRepository:Repository<Property>){}

    async findAll(){
        return this.PropertyRepository.find({relations:{host:true, images:true,amenities:true,location:true}})
    }

    async getPropertyById(id:number){
        const property = await this.PropertyRepository.findOne({where:{propertyId:id},
        relations:{host:true, images:true,amenities:true,location:true}});
        if(!property){
            throw new NotFoundException(`property with id ${id} not found`);
        }
        return property;
    }

    
}

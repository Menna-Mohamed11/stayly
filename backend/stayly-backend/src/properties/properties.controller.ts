import { Controller , Get , Param } from '@nestjs/common';
import { PropertiesService } from './properties.service.js';

@Controller('properties')
export class PropertiesController {
    private readonly propertiesService:PropertiesService;
    constructor(propertiesService:PropertiesService){
        this.propertiesService=propertiesService;
    }
    @Get()
    findAll(){
        return this.propertiesService.findAll()
    }
    @Get(':id')
    getPropertyById(@Param('id') id:string){
        return this.propertiesService.getPropertyById(+id);
    }
}

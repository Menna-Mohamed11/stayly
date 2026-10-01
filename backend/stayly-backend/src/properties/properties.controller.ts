import { Controller , Get , Param ,Query} from '@nestjs/common';
import { PropertiesService } from './properties.service.js';
import { SearchPropertyDto } from './dto/search-property.dto';

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
    @Get('search')
  search(@Query() searchDto: SearchPropertyDto) {
    return this.propertiesService.search(searchDto);
  }
}

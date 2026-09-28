import { Test, TestingModule } from '@nestjs/testing';
import { PropertyAmenitiesService } from './property-amenities.service.js';

describe('PropertyAmenitiesService', () => {
  let service: PropertyAmenitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyAmenitiesService],
    }).compile();

    service = module.get<PropertyAmenitiesService>(PropertyAmenitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

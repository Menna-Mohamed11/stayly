import { Test, TestingModule } from '@nestjs/testing';
import { PropertyAmenitiesController } from './property-amenities.controller.js';

describe('PropertyAmenitiesController', () => {
  let controller: PropertyAmenitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyAmenitiesController],
    }).compile();

    controller = module.get<PropertyAmenitiesController>(PropertyAmenitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { TestBed } from '@angular/core/testing';

import { OpenFoodServiceService } from './open-food-service.service';

describe('OpenFoodServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenFoodServiceService = TestBed.get(OpenFoodServiceService);
    expect(service).toBeTruthy();
  });
});

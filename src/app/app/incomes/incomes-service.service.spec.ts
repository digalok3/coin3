import { TestBed } from '@angular/core/testing';

import { IncomesServiceService } from './incomes-service.service';

describe('IncomesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncomesServiceService = TestBed.get(IncomesServiceService);
    expect(service).toBeTruthy();
  });
});

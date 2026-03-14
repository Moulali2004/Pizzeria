import { TestBed } from '@angular/core/testing';

import { OrderpizzaService } from './orderpizza.service';

describe('OrderpizzaService', () => {
  let service: OrderpizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderpizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

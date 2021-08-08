import { TestBed } from '@angular/core/testing';

import { IaApiServicesService } from './ia-api-services.service';

describe('IaApiServicesService', () => {
  let service: IaApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IaSharedService } from './ia-shared.service';

describe('IaSharedService', () => {
  let service: IaSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

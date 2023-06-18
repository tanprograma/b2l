import { TestBed } from '@angular/core/testing';

import { BiltilService } from './biltil.service';

describe('BiltilService', () => {
  let service: BiltilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiltilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

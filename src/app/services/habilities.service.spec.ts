import { TestBed } from '@angular/core/testing';

import { HabilitiesService } from './habilities.service';

describe('HabilitiesService', () => {
  let service: HabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

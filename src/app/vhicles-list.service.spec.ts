import { TestBed } from '@angular/core/testing';

import { VhiclesListService } from './vhicles-list.service';

describe('VhiclesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VhiclesListService = TestBed.get(VhiclesListService);
    expect(service).toBeTruthy();
  });
});

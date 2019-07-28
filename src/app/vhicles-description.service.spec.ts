import { TestBed } from '@angular/core/testing';

import { VhiclesDescriptionService } from './vhicles-description.service';

describe('VhiclesDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VhiclesDescriptionService = TestBed.get(VhiclesDescriptionService);
    expect(service).toBeTruthy();
  });
});

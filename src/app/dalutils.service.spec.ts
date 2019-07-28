import { TestBed } from '@angular/core/testing';

import { DALUtilsService } from './dalutils.service';

describe('DALUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DALUtilsService = TestBed.get(DALUtilsService);
    expect(service).toBeTruthy();
  });
});

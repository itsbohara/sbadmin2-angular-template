import { TestBed } from '@angular/core/testing';

import { SbathemeService } from './sbatheme.service';

describe('SbathemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbathemeService = TestBed.get(SbathemeService);
    expect(service).toBeTruthy();
  });
});

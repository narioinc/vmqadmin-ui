import { TestBed } from '@angular/core/testing';

import { LiveConfigService } from './live-config.service';

describe('LiveConfigService', () => {
  let service: LiveConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RetainedMessagesService } from './retained-messages.service';

describe('RetainedMessagesService', () => {
  let service: RetainedMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetainedMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

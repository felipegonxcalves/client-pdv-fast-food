import { TestBed } from '@angular/core/testing';

import { AppHttpServiceService } from './app-http-service.service';

describe('AppHttpServiceService', () => {
  let service: AppHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

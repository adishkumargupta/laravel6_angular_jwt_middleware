import { TestBed } from '@angular/core/testing';

import { AftrLoginService } from './aftr-login.service';

describe('AftrLoginService', () => {
  let service: AftrLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AftrLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

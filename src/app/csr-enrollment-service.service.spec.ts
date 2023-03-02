import { TestBed } from '@angular/core/testing';

import { CsrEnrollmentServiceService } from './csr-enrollment-service.service';

describe('CsrEnrollmentServiceService', () => {
  let service: CsrEnrollmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrEnrollmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

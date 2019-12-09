import { TestBed } from '@angular/core/testing';

import { SignedInService } from './signed-in.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
  }));

  it('should be created', () => {
    const service: SignedInService = TestBed.get(SignedInService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AuthUserService } from './auth.service';

describe('AuthUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthUserService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

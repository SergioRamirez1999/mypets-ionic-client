import { TestBed } from '@angular/core/testing';

import { AuthGuardStorageService } from './authguardstorage.service';

describe('AuthGuardStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardStorageService = TestBed.get(AuthGuardStorageService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ConvManagerService } from './conv-manager.service';

describe('ConvManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvManagerService = TestBed.get(ConvManagerService);
    expect(service).toBeTruthy();
  });
});

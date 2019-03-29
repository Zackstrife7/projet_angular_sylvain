import { TestBed } from '@angular/core/testing';

import { ConvService } from './conv.service';

describe('ConvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvService = TestBed.get(ConvService);
    expect(service).toBeTruthy();
  });
});

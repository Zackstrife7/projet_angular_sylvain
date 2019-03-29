import { TestBed } from '@angular/core/testing';

import { MessagesManagerService } from './messages-manager.service';

describe('MessagesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesManagerService = TestBed.get(MessagesManagerService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UIStateService } from './ui-state.service';

describe('UIStateService', () => {
  let service: UIStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DynamicComposerService } from './dynamic-composer.service';

describe('DynamicComposerService', () => {
  let service: DynamicComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

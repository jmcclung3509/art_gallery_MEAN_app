import { TestBed } from '@angular/core/testing';

import { AddPageService } from './add-page.service';

describe('AddPageService', () => {
  let service: AddPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

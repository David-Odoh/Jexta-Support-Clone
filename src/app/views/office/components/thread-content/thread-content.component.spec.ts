import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadContentComponent } from './thread-content.component';

describe('ThreadContentComponent', () => {
  let component: ThreadContentComponent;
  let fixture: ComponentFixture<ThreadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

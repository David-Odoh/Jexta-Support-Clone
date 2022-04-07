import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenInputComponent } from './hidden-input.component';

describe('HiddenInputComponent', () => {
  let component: HiddenInputComponent;
  let fixture: ComponentFixture<HiddenInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

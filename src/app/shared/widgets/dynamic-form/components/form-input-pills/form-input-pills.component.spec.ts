import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputPillsComponent } from './form-input-pills.component';

describe('FormInputPillsComponent', () => {
  let component: FormInputPillsComponent;
  let fixture: ComponentFixture<FormInputPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

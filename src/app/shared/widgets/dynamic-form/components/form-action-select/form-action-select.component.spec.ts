import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionSelectComponent } from './form-action-select.component';

describe('FormActionSelectComponent', () => {
  let component: FormActionSelectComponent;
  let fixture: ComponentFixture<FormActionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

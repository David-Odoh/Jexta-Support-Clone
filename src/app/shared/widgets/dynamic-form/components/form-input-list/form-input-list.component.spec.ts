import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputListComponent } from './form-input-list.component';

describe('FormInputListComponent', () => {
  let component: FormInputListComponent;
  let fixture: ComponentFixture<FormInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

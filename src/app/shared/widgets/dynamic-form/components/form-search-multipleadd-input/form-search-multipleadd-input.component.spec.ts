import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchMultipleaddInputComponent } from './form-search-multipleadd-input.component';

describe('FormSearchMultipleaddInputComponent', () => {
  let component: FormSearchMultipleaddInputComponent;
  let fixture: ComponentFixture<FormSearchMultipleaddInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchMultipleaddInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchMultipleaddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

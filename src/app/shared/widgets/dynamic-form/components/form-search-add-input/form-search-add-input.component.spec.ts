import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchAddInputComponent } from './form-search-add-input.component';

describe('FormSearchAddInputComponent', () => {
  let component: FormSearchAddInputComponent;
  let fixture: ComponentFixture<FormSearchAddInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchAddInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchAddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

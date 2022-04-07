import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultichoiceSelectComponent } from './form-multichoice-select.component';

describe('FormMultichoiceSelectComponent', () => {
  let component: FormMultichoiceSelectComponent;
  let fixture: ComponentFixture<FormMultichoiceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMultichoiceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultichoiceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

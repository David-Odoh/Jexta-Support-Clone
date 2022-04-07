import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionTitleComponent } from './form-section-title.component';

describe('FormSectionTitleComponent', () => {
  let component: FormSectionTitleComponent;
  let fixture: ComponentFixture<FormSectionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSectionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityInputListComponent } from './nationality-input-list.component';

describe('NationalityInputListComponent', () => {
  let component: NationalityInputListComponent;
  let fixture: ComponentFixture<NationalityInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

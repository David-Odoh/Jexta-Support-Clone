import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalContainerComponent } from './generic-modal-container.component';

describe('GenericModalContainerComponent', () => {
  let component: GenericModalContainerComponent;
  let fixture: ComponentFixture<GenericModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

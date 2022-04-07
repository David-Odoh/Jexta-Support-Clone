import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroOneComponent } from './intro-one.component';

describe('IntroOneComponent', () => {
  let component: IntroOneComponent;
  let fixture: ComponentFixture<IntroOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

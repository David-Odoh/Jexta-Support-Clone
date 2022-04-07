import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFourComponent } from './intro-four.component';

describe('IntroFourComponent', () => {
  let component: IntroFourComponent;
  let fixture: ComponentFixture<IntroFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

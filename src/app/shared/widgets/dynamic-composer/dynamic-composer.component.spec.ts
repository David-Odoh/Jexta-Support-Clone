import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComposerComponent } from './dynamic-composer.component';

describe('DynamicComposerComponent', () => {
  let component: DynamicComposerComponent;
  let fixture: ComponentFixture<DynamicComposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComposerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

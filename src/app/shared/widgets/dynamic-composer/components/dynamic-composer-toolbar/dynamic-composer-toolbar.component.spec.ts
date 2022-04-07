import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComposerToolbarComponent } from './dynamic-composer-toolbar.component';

describe('DynamicComposerToolbarComponent', () => {
  let component: DynamicComposerToolbarComponent;
  let fixture: ComponentFixture<DynamicComposerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComposerToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComposerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

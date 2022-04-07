import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasMenuComponent } from './extras-menu.component';

describe('ExtrasMenuComponent', () => {
  let component: ExtrasMenuComponent;
  let fixture: ComponentFixture<ExtrasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrasMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

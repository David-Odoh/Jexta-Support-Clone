import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNewComponent } from './ticket-new.component';

describe('TicketNewComponent', () => {
  let component: TicketNewComponent;
  let fixture: ComponentFixture<TicketNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

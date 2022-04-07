import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  ticketTitle = '';

  constructor() { }

  updateTicketTitle(title) {
    this.ticketTitle = title;
  }
}

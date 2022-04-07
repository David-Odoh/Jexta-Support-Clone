import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  @Input() tickets;
  @Input() multiSelectActive;
  activeThread = -1;

  constructor() { }

  ngOnInit(): void {
    // if (this.tickets.length) {
    //   console.log('hey', this.tickets.length)
    //   this.activeThread = 0;
    // };
  }

  updateActiveThread(index) {
    this.activeThread = index;
    console.log('hey', this.activeThread)
  }
}

import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThreadService } from 'src/app/shared/services/thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {
  @Input() ticket;
  @Input() activeThread; //This is the Index of the current active Thread
  @Input() threadIndex; // This is the actual Index of this Thread
  @Output() updateIndex = new EventEmitter(); // This exports the Thread Index to simulate selection

  @Input() multiSelectActive = false; // This shuts out Opening of Thread. Actives Multiple Selection
  selected = false; // Applys style on when Multiple Selection is Active

  pipe = new DatePipe('en-US')

  constructor(private $thread: ThreadService, private router: Router) { }

  ngOnInit(): void {
  }

  formatDate(date) {
    let _date: any = this.pipe.transform(date, 'shortDate');
    let _now: any = this.pipe.transform(new Date(), 'shortDate');

    // Convert from String to Array
    let _splitNow = _now.split('/');
    let _splitDate = _date.split('/');

    // Return Logic
    if (_date == _now)
      return this.pipe.transform(date, 'shortTime');

    if (_splitDate[0] == _splitNow[0] && _splitDate[1] == (_splitNow[1] - 1) && _splitDate[2] == _splitNow[2])
      return 'Yesterday';

    return _date
  }

  exportIndex() {
    console.log(this.threadIndex)
    console.log(this.activeThread)

    if (this.multiSelectActive)
      this.allowSelection();
    else
      this.requestToOpenThread();
  }

  allowSelection() {
    this.selected = !this.selected;
  }

  requestToOpenThread() {
    this.router.navigate(["/office/ticket/view"]);

    // This exports the Thread Index to parent component
    this.updateIndex.emit(this.threadIndex);

    // This exports the Thread ID to open thread observable
    this.$thread.openThread("0x0");
  }

}

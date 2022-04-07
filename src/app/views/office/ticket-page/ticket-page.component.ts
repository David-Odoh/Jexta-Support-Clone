import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThreadService } from 'src/app/shared/services/thread.service';
import { Subscription } from 'rxjs';
import { Dictionary } from 'src/app/shared/models/dictionary';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  openThread = false;

  terms_from_dic = new Dictionary().terms

  constructor(private $thread: ThreadService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.$thread.$threadOpener.subscribe(threadId => {
      console.log('trying to open', threadId)
      if (threadId)
        this.displaySelectedThread()
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  displaySelectedThread() {
    this.openThread = true;
  }

  closeSelectedThread(e) {
    this.openThread = false
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/shared/services/ticket.service';
import { UIStateService } from 'src/app/shared/services/ui-state.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss']
})
export class TicketViewComponent implements OnInit {
  subscriptions: Subscription = new Subscription()

  constructor(private $ui: UIStateService, private route: ActivatedRoute, private $ticket: TicketService) {
    this.subscriptions.add(
      this.route.url.subscribe(u => {
        this.$ticket.updateTicketTitle('#227648'); // Has to be called before route is updated
        this.$ui.updateSecondaryRoute(u[0].path);
      })
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

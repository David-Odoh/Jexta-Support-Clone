import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ThreadService } from 'src/app/shared/services/thread.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  @ViewChild('searchbox') input;
  searchTerm$ = new Subject<string>();
  @Input() title = 'Jexta';

  showClearBtn = false;
  openMenu = false;
  multiSelect = false;
  openStatusList = false;

  groupActionBtns = [
    { alias: 'reopen', iconClasses: 'la la-external-link-alt', toolTip: 'Re-Open' },
    { alias: 'delete', iconClasses: 'la la-trash', toolTip: 'Delete' },
    { alias: 'assign', iconClasses: 'la la-user', toolTip: 'Assign' },
    { alias: 'close', iconClasses: 'la la-times', toolTip: 'Close' },
    { alias: 'transfer', iconClasses: 'ri-share-forward-line', toolTip: 'Transfer' },
  ]

  statusList = [
    { name: 'Open', displayName: 'Open' },
    { name: 'Close', displayName: 'Closed' },
    { name: 'Re-Open', displayName: 'Re-Opened' },
    { name: 'Resolve', displayName: 'Resolved' },
    { name: 'Unassign', displayName: 'Unassigned' },
    { name: 'Overdue', displayName: 'Overdue' },
    { name: 'Grace', displayName: 'Grace' },
    { name: 'Stale', displayName: 'Stale' },
  ];
  selectedStatus = this.statusList[0].name;

  myDate = new Date();
  tickets = [
    { _id: 1, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 19 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: true, assigned: true, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 6 },
    { _id: 2, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 18 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: false, assigned: true, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 1 },
    { _id: 3, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 12 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: true, assigned: false, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 2 },
    { _id: 4, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 12 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: true, assigned: false, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 2 },
    { _id: 5, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 12 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: true, assigned: false, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 2 },
    { _id: 6, senderName: 'Sarah David', emailTitle: 'UBA Okota ATM Down', ticketId: '#234667', agentName: 'Moses Bala', createdDate: 'Sat Dec 12 2020 17:21:39 GMT+0100 (West Africa Standard Time)', hasAttachment: true, assigned: false, emailBody: `For the outer div, set a min-width where you'd like the ellipsis to start appearing (say at about 150px). Remove the text-ellipsis class from the div and put it on the span. For the span element, add a width of 100% and make it an inline-block (or just use another div)`, attachmentCount: 2 },
  ]

  constructor(private router: Router, private $thread: ThreadService) {
    this.search(this.searchTerm$);
  }

  ngOnInit(): void { }

  // Updating Search Parameter
  search(terms: Observable<string>) {
    terms.pipe(debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(term => {
      if (term)
        this.showClearBtn = true;
      else
        this.showClearBtn = false;
    });
  }

  clearSearchBox() {
    this.input.nativeElement.value = '';
    this.showClearBtn = false;
  }

  toggleMultiSelect(e) {
    console.log(e)
    this.multiSelect = !this.multiSelect;
  }

  closeStatusMenu() { this.openStatusList = false }
  openStatusMenu() { this.openStatusList = true }

  selectStatusOption(status) {
    this.selectedStatus = status.displayName;
    this.closeStatusMenu()
  }

  requestToOpenTicketCreate() {
    this.router.navigate(["/office/ticket/new"]);

    // Display Create From in Thread Window
    this.$thread.openThread("0x0");
  }
}

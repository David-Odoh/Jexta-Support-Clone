import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from 'src/app/shared/services/ticket.service';
import { Subscription } from 'rxjs';
import { UIStateService } from 'src/app/shared/services/ui-state.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  @Output() closeThread = new EventEmitter();

  ticketId = '#227648';

  form: FormGroup;

  htmlContent = '';
  config1: any = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Leave an email or reply...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '3',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      // ['superscript', 'justifyLeft', 'justifyCenter',
      //   'justifyRight', 'justifyFull', 'indent', 'outdent', 'link', 'indent', 'outdent', 'subscript', 'superscript'],
      // ['fontSize']
    ]
  };

  constructor(private formBuilder: FormBuilder, private $ui: UIStateService, private $ticket: TicketService) {
    this.subscriptions.add(
      this.$ui.$secRoute.subscribe(title => {
        console.log(title)
        if (title == 'view')
          this.ticketId = this.$ticket.ticketTitle;
        else if (title == 'new')
          this.ticketId = '#000000';
      }));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      composer: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  requestThreadClose() {
    this.closeThread.emit();
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange(event) {
    console.warn(this.form.value);
    let formVal = this.form.value;
    if ('composer' in formVal)
      this.htmlContent = formVal['composer'];
  }

  toolbarVisible = false;

  toggleToolBar() {
    this.toolbarVisible = !this.toolbarVisible;
  }

  focusFunction(e) {
    console.log('Hi', e.returnValue)
    this.toolbarVisible = e.returnValue
  }
}

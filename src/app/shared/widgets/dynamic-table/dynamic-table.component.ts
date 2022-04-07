import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, OnDestroy {
  @Input() table_title;
  @Input() th_columns;
  @Input() td_columns;
  @Input() td_control;
  @Input() actions;
  @Input() spinnerColSpan;


  subscriptions: Subscription = new Subscription();
  @Input() float;

  @Input() stopLoading;
  @Input() notFound;
  @Input() paginationId;
  internetConnectionIssue: boolean;
  online$: boolean = navigator.onLine;

  @Input() _pagenumber: number = 1;
  @Input() _total: number = 5;
  @Input() _pagesize: number = 5;
  shouldReload = false;

  @Output() load = new EventEmitter<any>();
  @Output() _details = new EventEmitter<any>();
  @Output() _edit = new EventEmitter<any>();
  @Output() _delete = new EventEmitter<any>();
  @Output() _questions = new EventEmitter<any>();

  info = {
    _pagenumber: '',
    _total: '',
    _pagesize: ''
  }

  constructor() {
    // Reload
    if (this.online$) this.internetConnectionIssue = false;
    else this.internetConnectionIssue = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  spreadIntoArray(obj, i) {
    let newArray = [];

    for (let key in this.td_control) {
      // If Control is a Nested Format e.g Animal > Dog
      if (this.td_control[key].includes('>')) {

        let nestFrags = this.td_control[key].split('>');

        // Use loop to crawl to nested value  
        let tendToValue = obj;
        for (let i = 0; i < nestFrags.length; i++) {
          tendToValue = tendToValue[nestFrags[i]];
        }
        newArray.push(tendToValue);
      } else newArray.push(obj[this.td_control[key]]);
    }

    return newArray;
  }

  updateInfo(p, t, i) {
    this.info._pagenumber = p;
    this.info._total = t,
      this.info._pagesize = i
  }

  nextPage(page: number) {
    this.td_columns = null;
    this.updateInfo(page, this._total, this._pagesize);
    this.stopLoading = false;
    this.load.emit(this.info);
  }

  adjustTableRows(adjustedValue) {
    this.updateInfo(this._pagenumber, this._total, adjustedValue)
    this.load.emit(this.info);
  }

  getDetails(selected) {
    this._details.emit(selected)
  }

  doEdit(id) {
    this._edit.emit(id)
  }

  doDelete(id) {
    this._delete.emit(id)
  }

  getQuestions(id) {
    this._questions.emit(id)
  }

}

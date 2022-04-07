import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent implements OnInit {
  @Input() label;
  @Input() index;
  @Input() data;
  @Output() check = new EventEmitter();
  @Output() checkAll = new EventEmitter();
  isChecked = false;
  @Input() isAllChecked = false;

  constructor() {
  }

  ngOnInit() {
  }

  makeSelection() {
    this.isChecked = !this.isChecked;
    this.check.emit(this.isChecked)
  }

}
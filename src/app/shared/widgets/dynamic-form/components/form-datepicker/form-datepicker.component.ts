import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-datepicker',
  templateUrl: './form-datepicker.component.html',
  styleUrls: ['./form-datepicker.component.css']
})
export class FormDatepickerComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  constructor() { }

  ngOnInit() {
  }

  changeDetection(event) {

  }
}

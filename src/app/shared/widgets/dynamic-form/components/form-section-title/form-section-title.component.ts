import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-section-title',
  templateUrl: './form-section-title.component.html',
  styleUrls: ['./form-section-title.component.css']
})
export class FormSectionTitleComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  constructor() { }

  ngOnInit() {
  }

}

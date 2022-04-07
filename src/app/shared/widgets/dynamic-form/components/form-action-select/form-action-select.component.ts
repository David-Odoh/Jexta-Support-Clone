import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-action-select',
  templateUrl: './form-action-select.component.html',
  styleUrls: ['./form-action-select.component.css']
})
export class FormActionSelectComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  dropdown: boolean;
  selectedOption: any;
  decoyValue: string;

  constructor() {
  }

  ngOnInit() {
    this.decoyValue = '';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.selectedOption = this.group.controls[this.config.name].value;

      if (typeof this.selectedOption === 'object') {
        // Update Decoy Input
        this.decoyValue = this.selectedOption.value;

        // Extract Key string if and Object is passed
        this.group.controls[this.config.name].patchValue(this.selectedOption.key);
      }

      // Invoke Update
      if (this.selectedOption) this.makeUpdate();

    }, 10);
  }

  makeUpdate() {
    this.group.controls[this.config.name].valueChanges.subscribe(val => {
      if (typeof val === 'object') {
        this.selectedOption = val;
        // Update Decoy Input
        this.decoyValue = this.selectedOption.value;

        // Extract Key string if and Object is passed
        this.group.controls[this.config.name].patchValue(this.selectedOption.key);
      }
    });
  }

  toggleSelect() {
    this.dropdown = !this.dropdown;
  }

  close() {
    if (this.dropdown) this.dropdown = false;
  }

  updateSelectValue(option) {
    this.group.controls[this.config.name].patchValue(option.key);
    this.selectedOption = option;
    this.decoyValue = option.value;
  }
}

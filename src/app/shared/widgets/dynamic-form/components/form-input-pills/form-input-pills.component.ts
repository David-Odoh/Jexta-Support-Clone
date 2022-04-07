import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';

@Component({
  selector: 'app-form-input-pills',
  templateUrl: './form-input-pills.component.html',
  styleUrls: ['./form-input-pills.component.css']
})
export class FormInputPillsComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  options = [];
  constructor() {
  }

  tags = [];


  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeList();
    }, 10);
  }

  getInput(input: HTMLInputElement) {
    if (input.value) {
      // Get the last index of the last item in the options array

      let id
      if (this.options.length == 0) {
        id = this.options.lastIndexOf(this.options[this.options.length - 1]) + 1;
      } else {
        id = this.options[this.options.length - 1].id;
      }

      // Increment the index and equate to id
      let value = input.value

      //  Push new data structure into the options array
      this.options.push(value)

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);

      // Clear the input field
      input.value = null
    }
  }

  initializeList() {
    this.group.controls[this.config.name].valueChanges.subscribe(val => {
      if (Array.isArray(val)) {
        this.options = val;
      }
    });
  }

  addTags() {
    this.tags.map(e => {
      // Remove property if it already exists in array
      this.options = this.options.filter(opt => opt != e);

      // Add property to Array
      this.options.push(e);

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);

    })
  }

  remove(_opt) {
    if (_opt) {
      this.options = this.options.filter(opt => opt != _opt);

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);
    }
  }
}

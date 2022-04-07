import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nationality-input-list',
  templateUrl: './nationality-input-list.component.html',
  styleUrls: ['./nationality-input-list.component.css']
})
export class NationalityInputListComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;

  options = [];
  constructor() {
  }

  ecowas = [];

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

  addEcowasStates() {
    this.ecowas.map(e => {
      // Remove state if it already exists in array
      this.options = this.options.filter(opt => opt != e);

      // Add State to Array
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';
import { FormSelectService } from '../../services/form-select.service';

@Component({
  selector: 'app-form-multichoice-select',
  templateUrl: './form-multichoice-select.component.html',
  styleUrls: ['./form-multichoice-select.component.css']
})
export class FormMultichoiceSelectComponent implements OnInit {
  @ViewChild('mcForm') ngForm: NgForm;
  theCheckbox = false;
  show_dropdown = false;

  group: FormGroup;
  config: FieldConfig;
  isEven: Boolean;

  selection_ForDisplayOnly = null;

  form;
  constructor(private fb: FormBuilder, private $form: FormSelectService) {
    setTimeout(() => {
      this.form = this.fb.group({
        options: this.buildOptions()
      });
    }, 20);
  }

  get multiChoice(): FormArray {
    return this.form.get('options') as FormArray;
  };

  buildOptions() {
    const arr = this.config.options.map(opt => {
      return this.fb.control(opt.checked);
    })
    console.log(this.fb.array(arr))
    return this.fb.array(arr);
  }

  submit(value) {
    console.log(value)
    const f = Object.assign({}, value, {
      answers: value.options.map((opt, i) => {
        return {
          id: this.config.options[i].id,
          name: this.config.options[i].name,
          label: this.config.options[i].label,
          checked: opt,
          score: this.config.options[i].score
        }
      })
    })

    console.log(f);
    // Share with observers
    this.$form.updateMultichoiceSelections(f);

    // Format for Display
    this.sortingForDisplay(f);
  }

  ngOnInit() { }

  toggleCheck(i, check) {
    this.form.get('options').controls[i].patchValue(!check);
    // Submit Multi-Choice Form Programmatically
    this.submit(this.ngForm.value)
  }

  toggleDropdown() {
    this.show_dropdown = !this.show_dropdown
    console.log(this.show_dropdown)
  }

  close() {
    if (this.show_dropdown) this.show_dropdown = false;
  }

  sortingForDisplay(data) {
    this.selection_ForDisplayOnly = data.answers.filter(ans => ans.checked).map(r => r.label).slice().reverse();

    // Update Ouput Value
    this.updateSelectValue(data.answers);
  }

  updateSelectValue(data) {
    this.group.controls[this.config.name].patchValue(data);
  }
}

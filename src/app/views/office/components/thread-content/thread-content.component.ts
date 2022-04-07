import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/shared/widgets/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/shared/widgets/dynamic-form/models/field-config';

@Component({
  selector: 'app-thread-content',
  templateUrl: './thread-content.component.html',
  styleUrls: ['./thread-content.component.scss']
})
export class ThreadContentComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  busy = false;
  float_style = true;

  config: FieldConfig[] = [
    // {
    //   type: 'input',
    //   label: 'Category Name',
    //   name: 'name',
    //   valueType: 'text',
    //   placeholder: 'Enter a name',
    //   validation: [Validators.required]
    // },
    {
      label: 'Status',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //setTimeout Prevent Change Detection Error
    // setTimeout(() => {
    //   let previousValid = this.form.valid;
    //   this.form.changes.subscribe(() => {
    //     if (this.form.valid !== previousValid) {
    //       previousValid = this.form.valid;
    //       this.form.setDisabled('submit', !previousValid);
    //     }
    //   });

    //   this.form.setDisabled('submit', true);
    // });
  }

  ngOnDestroy() {
  }



  submit(data: { [name: string]: any }) {
    console.log(data)
  }
}

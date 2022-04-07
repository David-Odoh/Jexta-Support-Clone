import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';
import { FieldConfig } from '../models/field-config';
import { FormActionSelectComponent } from '../components/form-action-select/form-action-select.component';
import { FormInputListComponent } from '../components/form-input-list/form-input-list.component';
import { NationalityInputListComponent } from '../components/nationality-input-list/nationality-input-list.component';
import { FormDatepickerComponent } from '../components/form-datepicker/form-datepicker.component';
import { FormTextareaComponent } from '../components/form-textarea/form-textarea.component';
import { FormFilechooserComponent } from '../components/form-filechooser/form-filechooser.component';
import { FormInputPillsComponent } from '../components/form-input-pills/form-input-pills.component';
import { FormMultichoiceSelectComponent } from '../components/form-multichoice-select/form-multichoice-select.component';
import { FormEditorComponent } from '../components/form-editor/form-editor.component';
import { FormSectionTitleComponent } from '../components/form-section-title/form-section-title.component';
import { HiddenInputComponent } from './../components/hidden-input/hidden-input.component';
import { FormSearchAddInputComponent } from '../components/form-search-add-input/form-search-add-input.component';
import { FormSearchMultipleaddInputComponent } from '../components/form-search-multipleadd-input/form-search-multipleadd-input.component';


const components: { [type: string]: Type<Field> } = {
  button: FormButtonComponent,
  input: FormInputComponent,
  input_with_list: FormInputListComponent,
  input_nationality_list: NationalityInputListComponent,
  input_pills: FormInputPillsComponent,
  search_input_single: FormSearchAddInputComponent,
  search_input_multiple: FormSearchMultipleaddInputComponent,
  select: FormSelectComponent,
  actionSelect: FormActionSelectComponent,
  multichoiceSelect: FormMultichoiceSelectComponent,
  datepicker: FormDatepickerComponent,
  textarea: FormTextareaComponent,
  filechooser: FormFilechooserComponent,
  editor: FormEditorComponent,
  section_title: FormSectionTitleComponent,
  hidden: HiddenInputComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  @Input()
  isEven: Boolean;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.isEven = this.isEven;
  }
}

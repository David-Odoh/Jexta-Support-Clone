import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormActionSelectComponent } from './components/form-action-select/form-action-select.component';
import { NationalityInputListComponent } from './components/nationality-input-list/nationality-input-list.component';
import { FormSelectService } from './services/form-select.service';
import { FormDatepickerComponent } from './components/form-datepicker/form-datepicker.component';
import { FormFilechooserComponent } from './components/form-filechooser/form-filechooser.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FormEditorComponent } from './components/form-editor/form-editor.component';
import { ImageFilePreviewComponent } from './components/form-filechooser/components/image-file-preview/image-file-preview.component';
import { HiddenInputComponent } from './components/hidden-input/hidden-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormInputListComponent } from './components/form-input-list/form-input-list.component';
import { FormInputPillsComponent } from './components/form-input-pills/form-input-pills.component';
import { FormMultichoiceSelectComponent } from './components/form-multichoice-select/form-multichoice-select.component';
import { FormSectionTitleComponent } from './components/form-section-title/form-section-title.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { GeneralService } from './services/general.service';
import { FormSearchAddInputComponent } from './components/form-search-add-input/form-search-add-input.component';
import { FormSearchMultipleaddInputComponent } from './components/form-search-multipleadd-input/form-search-multipleadd-input.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  declarations: [
    FormSelectComponent,
    FormInputComponent,
    FormButtonComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    // ClickOutsideDirective,
    FormActionSelectComponent,
    FormInputListComponent,
    NationalityInputListComponent,
    FormDatepickerComponent,
    FormTextareaComponent,
    FormFilechooserComponent,
    FormMultichoiceSelectComponent,
    DragDropDirective,
    FormInputPillsComponent,
    FormEditorComponent,
    FormSectionTitleComponent,
    ImageFilePreviewComponent,
    HiddenInputComponent,
    FormSearchAddInputComponent,
    FormSearchMultipleaddInputComponent,
  ],
  exports: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CKEditorModule,
    DirectiveModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormInputListComponent,
    NationalityInputListComponent,
    FormInputPillsComponent,
    FormActionSelectComponent,
    FormDatepickerComponent,
    FormTextareaComponent,
    FormFilechooserComponent,
    FormMultichoiceSelectComponent,
    FormEditorComponent,
    FormSectionTitleComponent,
    HiddenInputComponent,
  ],
  providers: [
    FormSelectService,
    GeneralService,
    MatDatepickerModule
  ]
})
export class DynamicFormModule { }

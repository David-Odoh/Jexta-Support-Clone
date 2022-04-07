import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicComposerComponent } from './dynamic-composer.component';
import { DynamicComposerToolbarComponent } from './components/dynamic-composer-toolbar/dynamic-composer-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AeSelectComponent } from './components/ae-select/ae-select.component';

const exportedClasses = [
    DynamicComposerComponent,
    DynamicComposerToolbarComponent,
    AeSelectComponent
]

@NgModule({
    declarations: exportedClasses,
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: exportedClasses
})
export class DynamicComposerModule { }

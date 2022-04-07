import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const exportedClasses = [
    DynamicCheckboxComponent,
    DynamicTableComponent,
]

@NgModule({
    declarations: exportedClasses,
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
    ],
    exports: exportedClasses
})
export class WidgetModule { }

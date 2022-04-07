import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModal } from './confirmation-modal/confirmation-modal.component';
import { GenericModalContainer } from './generic-modal-container/generic-modal-container.component';
import {
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from "@angular/material/dialog";

const exportedClasses = [
    ConfirmationModal,
    GenericModalContainer,
]

@NgModule({
    declarations: exportedClasses,
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        MatDialogModule,
    ],
    providers: [
        {
            provide: MatDialogRef,
            useValue: {}
        },
        {
            provide: MAT_DIALOG_DATA,
            useValue: {} // Add any data you wish to test if it is passed/used correctly
        },
    ],
    exports: exportedClasses
})
export class ModalsModule { }

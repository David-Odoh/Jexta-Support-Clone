import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal-container',
  templateUrl: './generic-modal-container.component.html',
  styleUrls: ['./generic-modal-container.component.css']
})
export class GenericModalContainer implements OnInit {
  constructor(public dialogRef: MatDialogRef<GenericModalContainer>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}

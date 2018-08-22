import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';


@Component({
  selector: 'app-turn-popup',
  templateUrl: './turn-popup.component.html',
  styleUrls: ['./turn-popup.component.css']
})
export class TurnPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}

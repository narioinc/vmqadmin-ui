import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StatusDialogComponent} from '../dialogs/status-dialog/status-dialog.component'
import { StatusDialogType } from '../dialogs/dialog-data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(StatusDialogComponent, {
      width: '250px',
      data: {title: "Test", text: "Sample dialog", type: StatusDialogType.MESSAGE}
    });
  }
  ngOnInit(): void {
  }

}

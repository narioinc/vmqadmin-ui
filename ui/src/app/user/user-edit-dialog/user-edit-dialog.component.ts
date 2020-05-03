import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }
  
  userEditForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-z]{1,10}')]),
    lastName: new FormControl('', [Validators.pattern('[a-z]{1,10}')]),
    userID: new FormControl('')
  });

  ngOnInit(): void {
    this.userEditForm.setValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      userID: this.data.userID
    })
  }

  cancelEdit(): void {
    this.dialogRef.close();
  }
}

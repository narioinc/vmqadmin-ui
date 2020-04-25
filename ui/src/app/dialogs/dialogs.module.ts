import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusDialogComponent } from './status-dialog/status-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [StatusDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    StatusDialogComponent,
  ]
})
export class DialogsModule { }

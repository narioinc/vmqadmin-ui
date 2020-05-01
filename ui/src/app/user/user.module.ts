import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UserModule { }

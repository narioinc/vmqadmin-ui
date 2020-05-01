import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionInfoComponent } from './session-info/session-info.component';
import { SessionRoutingModule } from './session-routing';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    SessionInfoComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MatIconModule,
    MatTableModule
  ]
})
export class SessionModule { }

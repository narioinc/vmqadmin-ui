import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionInfoComponent } from './session-info/session-info.component';
import { SessionRoutingModule } from './session-routing';



@NgModule({
  declarations: [
    SessionInfoComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }

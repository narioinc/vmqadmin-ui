import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerInfoComponent } from './listener-info/listener-info.component';
import { ListenerRoutingModule } from './listener-routing';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ListenerInfoComponent],
  imports: [
    CommonModule,
    ListenerRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ListenerModule { }

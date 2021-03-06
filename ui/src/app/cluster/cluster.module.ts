import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterInfoComponent } from './cluster-info/cluster-info.component';
import { ClusterRoutingModule } from './cluster-routing';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [ClusterInfoComponent],
  imports: [
    CommonModule,
    ClusterRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ClusterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterInfoComponent } from './cluster-info/cluster-info.component';
import { ClusterRoutingModule } from './cluster-routing';



@NgModule({
  declarations: [ClusterInfoComponent],
  imports: [
    CommonModule,
    ClusterRoutingModule
  ]
})
export class ClusterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterMetricsComponent } from './cluster-metrics/cluster-metrics.component';
import {MetricsRoutingModule} from './metrics-routing';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClusterMetricsComponent],
  imports: [
    CommonModule,
    MetricsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MetricsModule { }

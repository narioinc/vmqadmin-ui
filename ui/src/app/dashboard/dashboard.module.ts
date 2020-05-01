import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthmetricsComponent } from './healthmetrics/healthmetrics.component';
import { DashboardRoutingModule } from './dashboard-routing';



@NgModule({
  declarations: [
    HealthmetricsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

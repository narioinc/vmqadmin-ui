import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthmetricsComponent } from './healthmetrics/healthmetrics.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { DashboardComponent } from './dashboard.component'


@NgModule({
  declarations: [
    HealthmetricsComponent,
    DashboardComponent,
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

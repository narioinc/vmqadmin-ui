import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthmetricsComponent } from './healthmetrics/healthmetrics.component';
import { DashboardRouterModule } from './dashboard-routing'


@NgModule({
  declarations: [
    HealthmetricsComponent,
    ],
  imports: [
    CommonModule,
    DashboardRouterModule
  ]
})
export class DashboardModule { }

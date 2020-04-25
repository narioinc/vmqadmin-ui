import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HealthmetricsComponent } from './healthmetrics/healthmetrics.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: 'health', component: HealthmetricsComponent },
  { path: '', component: DashboardComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
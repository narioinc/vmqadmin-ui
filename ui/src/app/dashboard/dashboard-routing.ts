import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HealthmetricsComponent } from './healthmetrics/healthmetrics.component';

const routes: Routes = [
  { path: 'health', component: HealthmetricsComponent },
  { path: '', redirectTo: 'health', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule { }
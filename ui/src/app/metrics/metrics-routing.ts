import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ClusterMetricsComponent } from './cluster-metrics/cluster-metrics.component';

const routes: Routes = [
  { path: 'info', component: ClusterMetricsComponent },
  { path: '', redirectTo: 'info', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricsRoutingModule { }
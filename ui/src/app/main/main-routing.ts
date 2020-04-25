import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HealthmetricsComponent } from '../dashboard/healthmetrics/healthmetrics.component';

const routes: Routes = [
  { path: 'dashboard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRouterModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LiveConfigurationEditComponent } from './live-configuration-edit/live-configuration-edit.component';

const routes: Routes = [
  { path: 'edit', component: LiveConfigurationEditComponent },
  { path: '', redirectTo: 'edit', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveConfigRoutingModule { }
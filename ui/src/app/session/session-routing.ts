import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SessionInfoComponent } from './session-info/session-info.component';

const routes: Routes = [
 { path: '', redirectTo: 'info', pathMatch: 'full' },
 { path: 'info', component: SessionInfoComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
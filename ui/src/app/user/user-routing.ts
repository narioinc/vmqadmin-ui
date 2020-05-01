import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full'},
  { path: 'info', component: ListUserComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
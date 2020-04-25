import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SetupAdminComponent } from '../init/setup-admin/setup-admin.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'setup-admin', component: SetupAdminComponent },
    { path: 'welcome', component: WelcomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitRouterModule { }
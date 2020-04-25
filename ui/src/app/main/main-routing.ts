import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  /*{ path: 'dashboard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }*/
  { path: '', component: MainComponentComponent},
  { path: 'dashboard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'users',  
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
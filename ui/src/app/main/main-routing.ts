import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: 'dashboard', 
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: 'users',  
    loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  },
  {
    path: 'cluster',  
    loadChildren: () => import('../cluster/cluster.module').then(m => m.ClusterModule)
  },
  {
    path: 'session',  
    loadChildren: () => import('../session/session.module').then(m => m.SessionModule)
  },
  {
    path: 'plugins',  
    loadChildren: () => import('../plugins/plugins.module').then(m => m.PluginsModule)
  },
  {
    path: 'listener',  
    loadChildren: () => import('../listener/listener.module').then(m => m.ListenerModule)
  }


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
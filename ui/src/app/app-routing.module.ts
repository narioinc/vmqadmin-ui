import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'init', 
    loadChildren: () => import('./init/init.module').then(m => m.InitModule)
  },
  { path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { path: '',   redirectTo: 'init', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

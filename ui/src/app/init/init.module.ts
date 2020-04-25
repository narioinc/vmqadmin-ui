import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SetupAdminComponent } from './setup-admin/setup-admin.component';
import { InitRouterModule } from './init-routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 


@NgModule({
  declarations: [WelcomeComponent, SetupAdminComponent],
  imports: [
    CommonModule,
    InitRouterModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class InitModule { }

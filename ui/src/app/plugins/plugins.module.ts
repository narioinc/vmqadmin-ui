import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginManagementComponent } from './plugin-management/plugin-management.component';
import {PluginRoutingModule} from './plugin-routing'


@NgModule({
  declarations: [PluginManagementComponent],
  imports: [
    CommonModule,
    PluginRoutingModule
  ]
})
export class PluginsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveConfigurationEditComponent } from './live-configuration-edit/live-configuration-edit.component';
import { LiveConfigRoutingModule } from './live-config-routing';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
  declarations: [LiveConfigurationEditComponent],
  imports: [
    CommonModule,
    LiveConfigRoutingModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class LiveConfigModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPageRoutingModule } from './edit-page-routing.module';
import { EditPageComponent } from './edit-page.component';


@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    EditPageRoutingModule
  ]
})
export class EditPageModule { }

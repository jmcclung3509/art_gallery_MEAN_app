import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AddPageRoutingModule } from './add-page-routing.module';
import { AddPageComponent } from './add-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddPageComponent,

  ],
  imports: [
    CommonModule,
    AddPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AddPageModule { }

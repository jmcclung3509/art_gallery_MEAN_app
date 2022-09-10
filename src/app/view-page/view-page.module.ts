import { ArtService } from './art.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPageRoutingModule } from './view-page-routing.module';
import { ViewPageComponent } from './view-page.component';


@NgModule({
  declarations: [
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    ViewPageRoutingModule
  ],
  providers: [ArtService]
})
export class ViewPageModule { }

import { ViewPageComponent } from './view-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPageModule } from './view-page.module';

const routes: Routes = [{
  path: '',
  component: ViewPageComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPageRoutingModule { }

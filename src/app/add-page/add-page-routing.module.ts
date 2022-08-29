import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page.component';
import { AddPageModule } from './add-page.module';

const routes: Routes = [{
  path: '',
  component: AddPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPageRoutingModule { }

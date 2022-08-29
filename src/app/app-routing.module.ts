import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-page',
    pathMatch: 'full'
  },
  {
  path: 'view-page',
  loadChildren: () => 
  import ('./view-page/view-page.module').then ((m)=>m.ViewPageModule
  ),
},
{
  path: 'add-page',
  loadChildren: () => 
  import ('./add-page/add-page.module').then ((m)=>m.AddPageModule
  ),
},
{
  path: 'edit-page',
  loadChildren: () => 
  import ('./edit-page/edit-page.module').then ((m)=>m.EditPageModule
  ),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

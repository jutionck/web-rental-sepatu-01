import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shoes',
    loadChildren: () => import('./shoes/shoes.module').then((m) => m.ShoesModule)
  },
  {
    path: '',
    redirectTo: '/shoes',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

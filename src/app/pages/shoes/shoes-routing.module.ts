import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesFormComponent } from './shoes-form/shoes-form.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { ShoesComponent } from './shoes.component';

const routes: Routes = [
  {
    path: '',
    component: ShoesComponent,
    children: [
      {
        path: '',
        component: ShoesListComponent
      },
      {
        path: 'form',
        component: ShoesFormComponent
      },
      {
        path: 'form/:id',
        component: ShoesFormComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesRoutingModule { }

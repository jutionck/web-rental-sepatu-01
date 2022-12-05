import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { ShoesFormComponent } from './shoes-form/shoes-form.component';
import { ShoesRoutingModule } from './shoes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoesComponent,
    ShoesListComponent,
    ShoesFormComponent
  ],
  imports: [
    CommonModule,
    ShoesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ShoesModule { }

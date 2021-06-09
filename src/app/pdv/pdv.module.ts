import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPdvComponent } from './list-pdv/list-pdv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListPdvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListPdvComponent]
})
export class PdvModule { }

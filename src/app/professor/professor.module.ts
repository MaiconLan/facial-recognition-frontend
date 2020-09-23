import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaProfessorComponent} from './lista-professor/lista-professor.component';



@NgModule({
  declarations: [ListaProfessorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListaProfessorComponent
  ]
})
export class ProfessorModule { }

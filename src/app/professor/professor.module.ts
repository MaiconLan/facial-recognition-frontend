import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaProfessorComponent} from './lista-professor/lista-professor.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../shared/shared.module';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListaProfessorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    SharedModule,
    InputTextModule,
    TooltipModule,
    FormsModule,
  ],
  exports: [
    ListaProfessorComponent
  ]
})
export class ProfessorModule { }

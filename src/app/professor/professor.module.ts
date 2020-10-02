import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaProfessorComponent} from './lista-professor/lista-professor.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../shared/shared.module';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MessageModule} from 'primeng/message';


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
    ToastModule,
    MessageModule
  ],
  exports: [
    ListaProfessorComponent
  ],
  providers: [MessageService]
})
export class ProfessorModule { }

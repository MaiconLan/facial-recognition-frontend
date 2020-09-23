import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroAlunoComponent} from './cadastro-aluno/cadastro-aluno.component';
import {ListaAlunoComponent} from './lista-aluno/lista-aluno.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    CadastroAlunoComponent,
    ListaAlunoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextModule,
    SelectButtonModule,
    PasswordModule
  ],
  exports: [
    CadastroAlunoComponent,
    ListaAlunoComponent
  ]
})
export class AlunoModule {
}

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
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


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
    PasswordModule,
    SharedModule,
    HttpClientModule,

    ConfirmDialogModule,
  ],
  exports: [
    CadastroAlunoComponent,
    ListaAlunoComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class AlunoModule {
}

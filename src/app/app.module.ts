import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AlunoModule} from './aluno/aluno.module';
import {CoreModule} from './core/core.module';
import {ProfessorModule} from './professor/professor.module';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {SegurancaModule} from './seguranca/seguranca.module';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import {TurmaModule} from './turma/turma.module';

@NgModule({
  declarations: [
    AppComponent,
    NaoAutorizadoComponent,
  ],
  imports: [
    BrowserModule,
    MessageModule,
    ButtonModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule,
    InputTextModule,
    PasswordModule,
    SelectButtonModule,
    AlunoModule,
    CoreModule,
    ProfessorModule,
    ConfirmDialogModule,
    ToastModule,
    MessageModule,
    AppRoutingModule,
    SegurancaModule,
    TurmaModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

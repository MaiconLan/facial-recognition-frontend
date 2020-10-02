import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
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
import {RouterModule, Routes} from '@angular/router';
import {ListaAlunoComponent} from './aluno/lista-aluno/lista-aluno.component';
import {CadastroAlunoComponent} from './aluno/cadastro-aluno/cadastro-aluno.component';
import {ListaProfessorComponent} from './professor/lista-professor/lista-professor.component';
import {CadastroProfessorComponent} from './professor/cadastro-professor/cadastro-professor.component';

const routes: Routes = [
  {path: 'aluno', component: ListaAlunoComponent},
  {path: 'aluno/novo', component: CadastroAlunoComponent},
  {path: 'aluno/:id', component: CadastroAlunoComponent},
  {path: 'professor', component: ListaProfessorComponent},
  {path: 'professor/novo', component: CadastroProfessorComponent},
  {path: 'professor/:id', component: CadastroProfessorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    RouterModule.forRoot(routes),
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListaAlunoComponent} from './aluno/lista-aluno/lista-aluno.component';
import {CadastroAlunoComponent} from './aluno/cadastro-aluno/cadastro-aluno.component';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {NavbarComponent} from './navbar/navbar.component';
import {ListaProfessorComponent} from './professor/lista-professor/lista-professor.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent,
    NavbarComponent,
    ListaProfessorComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

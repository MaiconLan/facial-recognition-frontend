import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListaAlunoComponent} from './aluno/lista-aluno/lista-aluno.component';
import {CadastroAlunoComponent} from './aluno/cadastro-aluno/cadastro-aluno.component';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MessageModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

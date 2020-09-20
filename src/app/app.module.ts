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
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

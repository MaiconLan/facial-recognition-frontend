import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import {NavbarComponent} from './core/navbar/navbar.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {SelectButtonModule} from 'primeng/selectbutton';
import {AlunoModule} from './aluno/aluno.module';
import {CoreModule} from './core/core.module';

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
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

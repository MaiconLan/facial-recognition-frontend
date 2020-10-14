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
import {NaoAutorizadoComponent} from './nao-autorizado/nao-autorizado.component';
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";
import {LOADING_BAR_CONFIG, LoadingBarModule} from "@ngx-loading-bar/core";
import {TurmaModule} from './turma/turma.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NaoAutorizadoComponent,
    DashboardComponent,
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
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {provide: LOADING_BAR_CONFIG, useValue: {latencyThreshold: 100}},
    TurmaModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

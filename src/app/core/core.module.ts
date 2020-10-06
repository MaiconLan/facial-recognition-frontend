import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {Title} from '@angular/platform-browser';
import {ProfessorService} from '../professor/professor.service';
import {AlunoService} from '../aluno/aluno.service';
import {AuthService} from '../seguranca/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {FacialHttp} from '../seguranca/facial-http';
import {ErrorHandlerService} from './error-handler.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [Title, ProfessorService, AlunoService, AuthService, JwtHelperService, FacialHttp, ErrorHandlerService],
  exports: [NavbarComponent]
})
export class CoreModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaAlunoComponent} from '../aluno/lista-aluno/lista-aluno.component';
import {CadastroAlunoComponent} from '../aluno/cadastro-aluno/cadastro-aluno.component';
import {ListaProfessorComponent} from '../professor/lista-professor/lista-professor.component';
import {CadastroProfessorComponent} from '../professor/cadastro-professor/cadastro-professor.component';
import {PaginaNaoEncontradaComponent} from '../core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import {LoginFormComponent} from '../seguranca/login-form/login-form.component';
import {AuthGuard} from '../seguranca/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'aluno', component: ListaAlunoComponent, canActivate: [AuthGuard]},
  {path: 'aluno/novo', component: CadastroAlunoComponent, canActivate: [AuthGuard]},
  {path: 'aluno/:id', component: CadastroAlunoComponent, canActivate: [AuthGuard]},
  {path: 'professor', component: ListaProfessorComponent, canActivate: [AuthGuard]},
  {path: 'professor/novo', component: CadastroProfessorComponent, canActivate: [AuthGuard]},
  {path: 'professor/:id', component: CadastroProfessorComponent, canActivate: [AuthGuard]},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'pagina-nao-encontrada'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

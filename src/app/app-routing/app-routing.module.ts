import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaAlunoComponent} from '../aluno/lista-aluno/lista-aluno.component';
import {CadastroAlunoComponent} from '../aluno/cadastro-aluno/cadastro-aluno.component';
import {ListaProfessorComponent} from '../professor/lista-professor/lista-professor.component';
import {CadastroProfessorComponent} from '../professor/cadastro-professor/cadastro-professor.component';
import {PaginaNaoEncontradaComponent} from '../core/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: '', redirectTo: 'aluno', pathMatch: 'full'},
  {path: 'aluno', component: ListaAlunoComponent},
  {path: 'aluno/novo', component: CadastroAlunoComponent},
  {path: 'aluno/:id', component: CadastroAlunoComponent},
  {path: 'professor', component: ListaProfessorComponent},
  {path: 'professor/novo', component: CadastroProfessorComponent},
  {path: 'professor/:id', component: CadastroProfessorComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
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
export class AppRoutingModule { }

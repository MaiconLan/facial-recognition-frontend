import {Component, OnInit} from '@angular/core';
import {TurmaService} from "../turma.service";
import {Aluno, Turma} from "../../core/model";
import {NgForm} from "@angular/forms";
import {ProfessorService} from "../../professor/professor.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {AlunoService} from "../../aluno/aluno.service";
import {MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.css']
})
export class CadastroTurmaComponent implements OnInit {

  turma = new Turma();

  professores = [{label: 'Selecione', value: null}];
  alunos: Aluno[];

  tipos = [
    {label: 'Selecione', value: null},
    {label: 'Bimestral', value: 'BIMESTRAL'},
    {label: 'Trimestral', value: 'TRIMESTRAL'},
    {label: 'Anual', value: 'ANUAL'},
    {label: 'Semestral', value: 'SEMESTRAL'},
  ];

  constructor(private turmaService: TurmaService,
              private professorService: ProfessorService,
              private alunoService: AlunoService,
              private handler: ErrorHandlerService,
              private messageService: MessageService,
              private title: Title,
              private rout: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.title.setTitle('Cadastro de turma');
    const id = this.rout.snapshot.params.id;

    if (id) {
      this.buscar(id);
    }

    this.carregarDropdownProfessores();
    this.carregarDropdownAlunos();
  }

  private carregarDropdownProfessores(): void {
    this.professorService.listar()
      .then(resultado => {
        for (const professor of resultado.content) {
          this.professores.push({label: professor.nome, value: professor});
        }
      }).catch(error => this.handler.handle(error));
  }

  private carregarDropdownAlunos(): void {
    this.alunoService.listar()
      .then(resultado => {
        this.alunos = resultado.content;

        for (const aluno of this.turma.alunos) {
            const index = this.alunos.findIndex(a => a.idAluno === aluno.idAluno);
            this.alunos.splice(index, 1);
        }
      }).catch(error => this.handler.handle(error));
  }

  salvar(): void {
    if (this.editando()) {
      this.atualizar();
    } else {
      this.criar();
    }
  }

  criar(): void {
    this.turmaService.criar(this.turma)
      .then(() => {
        this.addSuccess('Criado', 'Registro criado com sucesso');
      }).catch(error => this.handler.handle(error));
  }

  atualizar(): void {
    console.log(this.turma);
    this.turmaService.atualizar(this.turma)
      .then(() => {
        this.addSuccess('Atualizado', 'Registro atualizado com sucesso');
      }).catch(error => this.handler.handle(error));
  }

  buscar(id: number): void {
    this.turmaService.buscar(id).then(response => {
      this.turma = response;
      this.title.setTitle('Edição de turma');
    }).catch(error => this.handler.handle(error));
  }

  editando(): boolean {
    return Boolean(this.turma && this.turma.idTurma);
  }

  novo(f: NgForm): void {
    this.turma = new Turma();
    f.reset();
    this.router.navigate(['turma/novo']);
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }
}

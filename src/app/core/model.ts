
export class Aluno {
  idAluno: number;
  nome: string;
  email: string;
  usuario: string;
  senha: string;
  matricula: string;
  status = true;

}

export class Professor {
  idProfessor: number;
  nome: string;
  email: string;
  usuario: string;
  senha: string;
  status = true;
}

export class Turma {
  idTurma: number;
  materia: string;
  ano: number;
  periodo: string;
  tipo: string;
  finalizada: boolean;
  professor: Professor;
  alunos: Aluno[] = [];
}

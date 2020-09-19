import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  async load(): Promise<void> {
    this.loading = true;
    await new Promise(resolve => setTimeout(resolve, 2000));

    this.loading = false;
  }


}

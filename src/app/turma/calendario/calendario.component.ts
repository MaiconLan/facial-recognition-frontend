import {FullCalendar} from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Calendar} from '@fullcalendar/core';
import {ActivatedRoute} from '@angular/router';
import {CalendarioService} from '../calendario.service';
import {Aula, Turma} from "../../core/model";
import {TurmaService} from "../turma.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  options: any;

  events = [];

  mostrarAula: boolean;

  aula = new Aula();

  turma: Turma;

  @ViewChild('fc') fc: FullCalendar;

  idTurma: number;

  constructor(private calendarioService: CalendarioService,
              private turmaService: TurmaService,
              private handler: ErrorHandlerService,
              private messageService: MessageService,
              private rout: ActivatedRoute) {
    const name = Calendar.name;
  }

  ngOnInit(): void {
    this.idTurma = this.rout.snapshot.params.id;
    this.getTurma();
    this.listarAulas();
    this.configure();
  }

  getTurma(): void {
    this.turmaService.buscar(this.idTurma)
      .then(response => {
        this.turma = response;
        console.log(this.turma);
      });
  }

  listarAulas(): void {
    this.calendarioService.getAulas(this.idTurma)
      .then(response => {
        this.events = response;
      });
  }

  configure(): void {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      color: 'yellow',   // an option!
      textColor: 'black', // an option!
      dateClick: (e) => {
        this.criarEvento(e);
      },
      eventClick: (e) => {
        this.editarEvento(e);
      }
    };
  }

  gotoDate(date: Date): void {
    this.fc.getCalendar().gotoDate(date);

  }

  private criarEvento(event): void {
    console.log(event);
    this.aula = new Aula();
    this.aula.start = event.date;
    this.aula.end = event.date;
    this.mostrarAula = true;
  }

  private editarEvento(e): void {
    const event = this.fc.getCalendar().getEventById(e.event.id);
    const aulaEdit = new Aula();
    aulaEdit.id = event.id;
    aulaEdit.start = event.start;
    aulaEdit.end = event.end;
    aulaEdit.title = event.title;
    aulaEdit.turma = this.turma;

    this.aula = aulaEdit;
    this.mostrarAula = true;
  }

  minDate(): Date {
    return new Date();
  }

  salvarAula(): void {
    if (this.editando()) {
      this.editarAula();
    } else {
      this.criarAula();
    }
  }

  private criarAula(): void {
    this.calendarioService.criarAula(this.idTurma, this.aula)
      .then(() => {
        this.addSuccess('Aula criada', 'Aula criada com sucesso');
        this.aula = new Aula();
        this.mostrarAula = false;
        this.listarAulas();
      })
      .catch(error => this.handler.handle(error));
  }

  private editarAula(): void {
    this.calendarioService.editarAula(this.aula)
      .then(response => {
        console.log(response);
        this.events.push(response);
        this.mostrarAula = false;
        this.aula = new Aula();
        this.addSuccess('Aula Editada', 'Aula editada com sucesso');
      })
      .catch(error => this.handler.handle(error));
  }

  excluirAula(): void {
    this.calendarioService.excluirAula(this.aula)
      .then(() => {
        this.mostrarAula = false;
        this.aula = new Aula();
        this.listarAulas();
        this.addSuccess('Aula excluída', 'Aula excluída com sucesso');
      })
      .catch(error => this.handler.handle(error));
  }

  private editando(): boolean {
    return Boolean(this.aula && this.aula.id);
  }

  addSuccess(title: string, message: string): void {
    this.messageService.add({severity: 'success', summary: title, detail: message, life: 3000});
  }
}


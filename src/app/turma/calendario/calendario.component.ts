import {FullCalendar} from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Calendar} from '@fullcalendar/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() {
    const name = Calendar.name;
  }

  options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    dateClick: (e) => {
      console.log(e);
    }
  };

  events = [];

  @ViewChild('fc') fc: FullCalendar;

  gotoDate(date: Date): void {
    this.fc.getCalendar().gotoDate(date);
  }

  ngOnInit(): void {
    this.events = [{
      id: 1,
      title: 'All Day Event',
      start: '2020-10-11'
    },
      {
        id: 2,
        title: 'Long Event',
        start: '2020-10-11',
        end: '2020-10-11'
      },
      {
        id: 3,
        title: 'Repeating Event',
        start: '2020-10-11'
      }];
  }

}

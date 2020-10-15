import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      // mobile
      if (matches) {
        return [
          {title: 'Alunos sem Foto', cols: 1, rows: 1, style: {'background-color': '#CB4335', 'color': 'white'}, numero: '9'},
          {title: 'Alunos cadastrados', cols: 1, rows: 1, style: {'background-color': '#229954', 'color': 'white'}, numero: '10' },
          {title: 'Profs. cadastrados', cols: 1, rows: 1, style: {'background-color': '#7D3C98', 'color': '#fff'}, numero: '11'},
          {title: 'Aulas do dia', cols: 1, rows: 1, style: {'background-color': '#2E4053', 'color': '#fff'}, numero: '12'}
        ];
      }

      return [
        {title: 'Alunos sem Foto', cols: 2, rows: 1, style: {'background-color': '#CB4335', 'color': '#fff'}, numero: '9'},
        {title: 'Alunos cadastrados', cols: 1, rows: 1, style: {'background-color': '#229954', 'color': 'white'}, numero: '10'  },
        {title: 'Profs. cadastrados', cols: 2, rows: 1, style: {'background-color': '#7D3C98', 'color': '#fff'}, numero: '11'},
        {title: 'Aulas do dia', cols: 1, rows: 1, style: {'background-color': '#2E4053', 'color': '#fff'}, numero: '12'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}

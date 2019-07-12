import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Film } from '../../models/Film.model';

@Component({
  selector: 'app-film-list',
  template: `
    <ul *ngFor="let film of films">
      <li>{{film.title}}</li>
    </ul>
  `,
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {

  @Input() films: Film[];

  constructor() { }

  ngOnInit() {
  }

}

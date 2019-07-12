import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRedux from '../../redux';
import { Observable } from 'rxjs';
import { Film } from '../../models/Film.model';

@Component({
  selector: 'app-films',
  template: `
    <app-film-list [films]="films$ | async"></app-film-list>
  `,
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films$: Observable<Film[]>;

  constructor(private store: Store<fromRedux.FilmsState>) { }

  ngOnInit() {
    this.films$ = this.store.select<Film[]>(fromRedux.getAllFilms);
  }

}

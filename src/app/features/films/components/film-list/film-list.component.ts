import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../../models/Film.model';
import { Store } from '@ngrx/store';
import * as fromRedux from '../../redux';

@Component({
  selector: 'app-film-list-container',
  template: `
    <app-film-list [films]="films$ | async"></app-film-list>
  `,
  styleUrls: ['./film-list.component.scss']
})
export class FilmListContainerComponent implements OnInit {

  films$: Observable<Film[]>;

  constructor(private store: Store<fromRedux.FilmsState>) { }

  ngOnInit() {
    this.films$ = this.store.select<Film[]>(fromRedux.getAllFilms);
    this.store.dispatch(new fromRedux.LoadFilms());
  }

}

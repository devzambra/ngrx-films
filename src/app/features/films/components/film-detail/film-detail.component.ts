import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../redux';
import { Observable } from 'rxjs';
import { Film } from '../../models/Film.model';

@Component({
  selector: 'app-film-detail-container',
  template: `
    <app-film-detail [film]="film$ | async"></app-film-detail>
  `,
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailContainerComponent implements OnInit {

  film$: Observable<Film>;

  constructor(private store: Store<fromStore.FilmsState>) { }

  ngOnInit() {
    this.film$ = this.store.select(fromStore.getSelectedFilm);
  }

}

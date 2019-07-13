import { Injectable } from '@angular/core';
import { Effect , Actions, ofType } from '@ngrx/effects';

import * as filmActions from '../actions/films.actions';

import { switchMap, map, catchError } from 'rxjs/operators';
import { FilmsService } from '../../services/films/films.service';
import { of } from 'rxjs';

@Injectable()
export class FilmsEffects {
  constructor(private actions$: Actions, private filmsService: FilmsService) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(filmActions.LOAD_FILMS),
    switchMap(() => {
      return this.filmsService.getFilms().pipe(
        map((films) => new filmActions.LoadFilmsSuccess(films)),
        catchError((error) => of(new filmActions.LoadFilmsFail(error)))
      );
    })
  );
}

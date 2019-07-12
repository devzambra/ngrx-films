import { Action } from '@ngrx/store';
import { Film } from '../../models/Film.model';

export const LOAD_FILMS = '[FILMS] Load Films';
export const LOAD_FILMS_SUCCESS = '[FILMS] Load Films Success';
export const LOAD_FILMS_FAIL = '[FILMS] Load Films Fail';


export class LoadFilms implements Action {
  readonly type = LOAD_FILMS;
}

export class LoadFilmsFail implements Action {
  readonly type = LOAD_FILMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadFilmsSuccess implements Action {
  readonly type = LOAD_FILMS_SUCCESS;
  constructor(public payload: Film[]) {}
}

export type FilmActions = LoadFilms | LoadFilmsFail | LoadFilmsSuccess;

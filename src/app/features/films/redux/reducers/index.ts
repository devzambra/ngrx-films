import * as fromFilms from './films.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
export interface FilmsState {
  films: fromFilms.FilmState;
}

export const reducers: ActionReducerMap<FilmsState> = {
  films: fromFilms.reducer
};

export const getFilmsState = createFeatureSelector<FilmsState>('films');

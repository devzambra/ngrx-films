import * as fromFilms from './films.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface FilmsState {
  films: fromFilms.FilmState;
}

export const reducers: ActionReducerMap<FilmsState> = {
  films: fromFilms.reducer
};

export const getFilmsState = createFeatureSelector<FilmsState>('films');

export const getFilmState = createSelector(getFilmsState, (state: FilmsState) => state.films);

export const getAllFilms = createSelector(getFilmState, fromFilms.getFilms);
export const getFilmsLoading = createSelector(getFilmState, fromFilms.getFilmsLoading);
export const getFilmsLoaded = createSelector(getFilmState, fromFilms.getFilmsLoaded);

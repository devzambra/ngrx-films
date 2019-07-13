import { createSelector } from '@ngrx/store';

import { getFilmsState, FilmsState } from '../reducers';

import * as fromRoot from '../../../../redux';
import * as fromFilms from '../reducers/films.reducers';
import { Film } from '../../models/Film.model';

export const getFilmState = createSelector(getFilmsState, (state: FilmsState) => state.films);

export const getFilmsEntities = createSelector(getFilmState, fromFilms.getFilmsEntities);

export const getSelectedFilm = createSelector(getFilmsEntities, fromRoot.getRouterState,
  (entities, router): Film  => {
    return router.state && entities[router.state.params.filmId];
  }
  );

export const getFilmsLoading = createSelector(getFilmState, fromFilms.getFilmsLoading);
export const getFilmsLoaded = createSelector(getFilmState, fromFilms.getFilmsLoaded);

export const getAllFilms = createSelector(getFilmsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

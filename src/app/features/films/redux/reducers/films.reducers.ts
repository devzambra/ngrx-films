import { Film } from '../../models/Film.model';
import * as fromFilm from '../actions/films.actions';

export interface FilmState {
  data: Film[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FilmState = {
  data: [{
    id: 1,
    title: 'test film',
    synopsis: 'test',
    year: 2019,
    rating: 9.9,
    poster: 'test'
  }],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromFilm.FilmActions
): FilmState {
  switch (action.type) {
    case fromFilm.LOAD_FILMS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromFilm.LOAD_FILMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromFilm.LOAD_FILMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}

export const getFilmsLoading = (state: FilmState) => state.loading;
export const getFilmsLoaded = (state: FilmState) => state.loaded;
export const getFilms = (state: FilmState) => state.data;

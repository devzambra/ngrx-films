import { Film } from '../../models/Film.model';
import * as fromFilm from '../actions/films.actions';

export interface FilmState {
  entities: {[id: number]: Film};
  loaded: boolean;
  loading: boolean;
}

function getInitialState() {
  if (localStorage.getItem('films')) {
    return JSON.parse(localStorage.getItem('films'));
  } else {
    return {};
  }
}

export const initialState: FilmState = {
  entities: getInitialState(),
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
      const films = action.payload;

      const entities = films.reduce((entities: { [id: number]: Film }, film: Film) => {
        return {
          ...entities,
          [film.id]: film
        };
      }, {
        ...state.entities
      });

      localStorage.setItem('films', JSON.stringify(entities));

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  }

  return state;
}

export const getFilmsEntities = (state: FilmState) => state.entities;
export const getFilmsLoading = (state: FilmState) => state.loading;
export const getFilmsLoaded = (state: FilmState) => state.loaded;

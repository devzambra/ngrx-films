import { Injectable } from '@angular/core';
import { Film } from '../../models/Film.model';
import { Observable, of } from 'rxjs';

import {MOCK} from './films.mock';

@Injectable()
export class FilmsService {

  getFilms(): Observable<Film[]> {
    return of(MOCK);
  }
}

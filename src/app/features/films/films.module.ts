import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { FilmsComponent } from './components/films/films.component';
import { CommonModule } from '@angular/common';
import { FilmsService } from './services/films/films.service';
import { EffectsModule, Actions } from '@ngrx/effects';
import { effects } from './redux';
import { FilmDetailContainerComponent } from './components/film-detail/film-detail.component';
import { FilmListContainerComponent } from './components/film-list/film-list.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { FilmDetailComponent } from './pages/film-detail/film-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      {
        path: '',
        component: FilmListContainerComponent
      },
      {
        path: ':filmId',
        component: FilmDetailContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('films', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [
    FilmsComponent,
    FilmListContainerComponent,
    FilmDetailContainerComponent,
    FilmListComponent,
    FilmDetailComponent
  ],
  providers: [FilmsService, Actions]
})
export class FilmsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { FilmsComponent } from './components/films/films.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {

    path: '',
    component: FilmsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('films', reducers)
  ],
  exports: [],
  declarations: [FilmsComponent, FilmListComponent],
})
export class FilmsModule { }

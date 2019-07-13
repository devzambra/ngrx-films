import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models/Film.model';

@Component({
  selector: 'app-film-detail',
  template: `
    <p>
      {{film.title}}
    </p>
  `,
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent {

  @Input() film: Film;

}

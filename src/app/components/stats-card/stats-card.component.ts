import { Component, Input } from '@angular/core';
import { IStatsFigure } from 'src/app/model/StatsFigure';

@Component({
  standalone: false,
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() statsFigure!: IStatsFigure;
}

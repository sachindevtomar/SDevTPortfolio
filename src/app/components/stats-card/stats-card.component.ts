import { Component, OnInit, Input } from '@angular/core';
import { IStatsFigure } from 'src/app/model/StatsFigure';
import {Skill} from '../../model/ProfileDataInterfaces';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  @Input() statsFigure: IStatsFigure;


  constructor() { }

  ngOnInit(): void {
  }

}

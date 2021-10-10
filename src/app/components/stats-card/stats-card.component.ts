import { Component, OnInit, Input } from '@angular/core';
import {Skill} from '../../model/DataInterfaces';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  @Input() myCount: number;
  @Input() mySubmissions: number;
  @Input() totalCount: number;
  @Input() difficulty: string;


  constructor() { }

  ngOnInit(): void {
  }

}

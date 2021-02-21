import { Component, OnInit, Input } from '@angular/core';
import { NumberTile } from 'src/app/model/DataInterfaces';

@Component({
  selector: 'app-number-tile',
  templateUrl: './number-tile.component.html',
  styleUrls: ['./number-tile.component.scss']
})
export class NumberTileComponent implements OnInit {
  @Input() numberTile: NumberTile;

  constructor() { }

  ngOnInit(): void {
  }

}

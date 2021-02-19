import { Component, OnInit } from '@angular/core';
import fullData from '../../../assets/data/data.json';
import {Data} from '../../model/DataInterfaces';

@Component({
  selector: 'app-center',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Data = fullData;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import fullData from '../../../assets/data/data.json';
import {Data} from '../../model/ProfileDataInterfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data: Data = fullData;
  constructor() { }

  ngOnInit(): void {
  }

}

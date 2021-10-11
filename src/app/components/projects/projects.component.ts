import { Component, OnInit } from '@angular/core';
import fullData from '../../../assets/data/data.json';
import {Data} from '../../model/ProfileDataInterfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  data: Data = fullData;
  
  constructor() { }

  ngOnInit(): void {
  }

}

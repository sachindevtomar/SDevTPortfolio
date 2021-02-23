import { Component, OnInit } from '@angular/core';
import fullData from '../../../assets/data/data.json';
import {Data} from '../../model/DataInterfaces';

@Component({
  selector: 'app-e-and-e',
  templateUrl: './e-and-e.component.html',
  styleUrls: ['./e-and-e.component.scss']
})
export class EAndEComponent implements OnInit {
  data: Data = fullData;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngOnDestroy(): void{
  }

}

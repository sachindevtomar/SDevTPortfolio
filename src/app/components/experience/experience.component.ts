import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from '../../model/DataInterfaces'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() exp: WorkExperience;
  constructor() { }

  ngOnInit(): void {
  }

  getDateDifference(startDateString: String, endDateString: String): any{
    let startDate = new Date(startDateString.toString());
    let endDate = endDateString.toString() !== "" ? new Date(endDateString.toString()) : new Date();
    var months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    
    var dateDiff = "";
    
    if(months > 0 && months/12 >= 1){
      var fyears = parseInt((months/12).toString());
      var fmonths = months%12;
      dateDiff = fyears + " years " + (fmonths > 0 ? fmonths + " months" : "");
    }
    else if(months > 0){
        dateDiff = months == 1 ? months + " month": months + " months";
    }
    else{
      dateDiff = "unknown"
    }
    return dateDiff;
  }
}

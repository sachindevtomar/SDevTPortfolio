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
  intoText: String = "I am into ";
  timerId: any;

  constructor() { }

  ngOnInit(): void {
    this.displayExpertiseWithBlink();
    
  }

  ngOnDestroy(): void{
    clearInterval(this.timerId);
  }

  displayExpertiseWithBlink():void{
    var expertiseArrayCount = 0;
    var shouldChangeExpertise = false;
    var currentExpertise = this.data.Expertise[0];
    var currentExpertiseLength = 0;
    var shouldIncreaseExpertiseLength = true;
    var waitForOneSecond = 0;
    var speedForTypewriter = 50;

    this.timerId = setInterval(() => {

      if(!shouldChangeExpertise){
        if(currentExpertiseLength>=0){
          if(shouldIncreaseExpertiseLength && waitForOneSecond === 0){
            currentExpertiseLength++;
            if(currentExpertiseLength === currentExpertise.length){
              shouldIncreaseExpertiseLength = false;
              waitForOneSecond = 10
            }
          }
          else if(waitForOneSecond > 0){
            waitForOneSecond--;
          }
          else{
            currentExpertiseLength--;
          }
        }
        else{
          shouldChangeExpertise = true;
          currentExpertiseLength = 0
        }
      }
      else{
        expertiseArrayCount = expertiseArrayCount < this.data.Expertise.length - 1 ? expertiseArrayCount + 1 : 0;
        shouldChangeExpertise = !shouldChangeExpertise;
        shouldIncreaseExpertiseLength = true;
        currentExpertise = this.data.Expertise[expertiseArrayCount];
      }
      
      this.intoText = "I am into " + currentExpertise.substring(0,currentExpertiseLength);

    }, speedForTypewriter);
  }

}

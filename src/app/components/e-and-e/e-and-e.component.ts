import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-and-e',
  templateUrl: './e-and-e.component.html',
  styleUrls: ['./e-and-e.component.scss']
})
export class EAndEComponent implements OnInit {

  loadingText: String = "Loading";
  timerId: any;

  constructor() { }

  ngOnInit(): void {
    this.loadingTextAnimation();
  }
  
  ngOnDestroy(): void{
    clearInterval(this.timerId);
  }

  loadingTextAnimation():void{
    var dotCount = 0;
    this.timerId = setInterval(() => {
      dotCount++;
      switch(dotCount){
        case 0: this.loadingText = "Loading";
                break;
        case 1: this.loadingText = "Loading.";
                break;
        case 2: this.loadingText = "Loading..";
                break;
        case 3: this.loadingText = "Loading...";
                break;
        case 4: this.loadingText = "Loading....";
                dotCount = 0;
                break;
      }
    }, 300);
  }

}

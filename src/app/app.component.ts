import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadingText: String = "Loading";
  timerId: any;
  showLoading: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.loadingTextAnimation();
    this.showLoadingTimer();
  }
  
  ngOnDestroy(): void{
    clearInterval(this.timerId);
  }

  showLoadingTimer(): void{
    setTimeout(() => {
      clearInterval(this.timerId);
      setTimeout(() => { this.showLoading = false; }, 500)
    }, 7000);
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

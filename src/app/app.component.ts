import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loadingText = 'Loading';
  timerId: ReturnType<typeof setInterval> | undefined;
  showLoading = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadingTextAnimation();
    this.showLoadingTimer();
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  showLoadingTimer(): void {
    setTimeout(() => {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
      setTimeout(() => {
        this.showLoading = false;
        this.cdr.detectChanges();
      }, 500);
    }, 7000);
  }

  loadingTextAnimation(): void {
    let dotCount = 0;
    this.timerId = setInterval(() => {
      dotCount++;
      switch (dotCount) {
        case 0: this.loadingText = 'Loading';
                break;
        case 1: this.loadingText = 'Loading.';
                break;
        case 2: this.loadingText = 'Loading..';
                break;
        case 3: this.loadingText = 'Loading...';
                break;
        case 4: this.loadingText = 'Loading....';
                dotCount = 0;
                break;
      }
      this.cdr.detectChanges();
    }, 300);
  }
}

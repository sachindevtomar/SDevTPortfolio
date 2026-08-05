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
      this.showLoading = false;
      this.cdr.detectChanges();
    }, 1800);
  }

  loadingTextAnimation(): void {
    let dotCount = 0;
    this.timerId = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      this.loadingText = 'Loading' + '.'.repeat(dotCount);
      this.cdr.detectChanges();
    }, 300);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSubmissionCardComponent } from './recent-submission-card.component';

describe('RecentSubmissionCardComponent', () => {
  let component: RecentSubmissionCardComponent;
  let fixture: ComponentFixture<RecentSubmissionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSubmissionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSubmissionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input } from '@angular/core';
import { RecentSubmission } from 'src/app/model/LeetCodeTypes';

@Component({
  selector: 'app-recent-submission-card',
  templateUrl: './recent-submission-card.component.html',
  styleUrls: ['./recent-submission-card.component.scss']
})
export class RecentSubmissionCardComponent implements OnInit {
  @Input() recentSubmission: RecentSubmission;


  constructor() { }

  ngOnInit(): void {
  }

}

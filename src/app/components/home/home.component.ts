import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { getAlfaLeetCodeProfile } from 'src/app/data-fetcher/alfaLeetCodeApi';
import { AlfaLeetCodeProfile, RecentSubmission } from 'src/app/model/LeetCodeTypes';
import { IStatsFigure } from 'src/app/model/StatsFigure';
import fullData from '../../../assets/data/data.json';
import { Data } from '../../model/ProfileDataInterfaces';

const LEETCODE_USERNAME = 'Sachin131';

@Component({
  standalone: false,
  selector: 'app-center',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: Data = fullData;
  intoText = 'I am into ';
  timerId: ReturnType<typeof setInterval> | undefined;

  leetCodeLoading = true;
  leetCodeError = false;
  leetCodeUsername = LEETCODE_USERNAME;
  profileUrl = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

  totalSolved = 0;
  ranking = 0;
  reputation = 0;
  contributionPoint = 0;
  acceptanceRate = 0;

  statsFigures: IStatsFigure[] = [];
  uniqueRecentSubmissions: RecentSubmission[] = [];
  selectedDifficulty = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  async ngOnInit(): Promise<void> {
    this.displayExpertiseWithBlink();
    await this.loadLeetCodeProfile();
  }

  trackByStatsFigure(_index: number, statsFigure: IStatsFigure): string {
    return statsFigure.difficulty;
  }

  trackByRecentSubmission(_index: number, recentSubmission: RecentSubmission): string {
    return `${recentSubmission.titleSlug}-${recentSubmission.timestamp}`;
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  selectDifficulty(difficulty: string): void {
    this.selectedDifficulty = this.selectedDifficulty === difficulty ? '' : difficulty;
  }

  problemUrl(submission: RecentSubmission): string {
    return `https://leetcode.com/problems/${submission.titleSlug}/`;
  }

  relativeTime(timestamp: string): string {
    const seconds = Number(timestamp);
    if (!Number.isFinite(seconds) || seconds <= 0) {
      return '';
    }
    const diffMs = Date.now() - seconds * 1000;
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  }

  private async loadLeetCodeProfile(): Promise<void> {
    this.leetCodeLoading = true;
    this.leetCodeError = false;
    this.cdr.markForCheck();

    try {
      const profile = await getAlfaLeetCodeProfile(LEETCODE_USERNAME);
      this.zone.run(() => {
        this.applyProfile(profile);
        this.leetCodeLoading = false;
        this.leetCodeError = false;
        this.cdr.detectChanges();
      });
    } catch (err) {
      console.error(err);
      this.zone.run(() => {
        this.leetCodeLoading = false;
        this.leetCodeError = true;
        this.statsFigures = [];
        this.uniqueRecentSubmissions = [];
        this.cdr.detectChanges();
      });
    }
  }

  private applyProfile(profile: AlfaLeetCodeProfile): void {
    this.totalSolved = profile.totalSolved ?? 0;
    this.ranking = profile.ranking ?? 0;
    this.reputation = profile.reputation ?? 0;
    this.contributionPoint = profile.contributionPoint ?? 0;

    const ac = profile.matchedUserStats?.acSubmissionNum ?? [];
    const total = profile.matchedUserStats?.totalSubmissionNum ?? profile.totalSubmissions ?? [];
    const allAc = ac.find((item) => item.difficulty === 'All')?.submissions
      ?? ac[0]?.submissions
      ?? this.totalSolved;
    const allAttempts = total.find((item) => item.difficulty === 'All')?.submissions
      ?? total[0]?.submissions
      ?? 0;
    this.acceptanceRate = allAttempts > 0 ? Math.round((allAc / allAttempts) * 100) : 0;

    const difficulties: Array<{
      key: 'Easy' | 'Medium' | 'Hard';
      solved: number;
      total: number;
      color: string;
    }> = [
      {
        key: 'Easy',
        solved: profile.easySolved ?? 0,
        total: profile.totalEasy ?? 0,
        color: '#00b8a3'
      },
      {
        key: 'Medium',
        solved: profile.mediumSolved ?? 0,
        total: profile.totalMedium ?? 0,
        color: '#ffc01e'
      },
      {
        key: 'Hard',
        solved: profile.hardSolved ?? 0,
        total: profile.totalHard ?? 0,
        color: '#ff375f'
      }
    ];

    this.statsFigures = difficulties.map((item) => {
      const submissions = ac.find((entry) => entry.difficulty === item.key)?.submissions ?? item.solved;
      const percent = item.total > 0 ? Math.min(100, Math.round((item.solved / item.total) * 1000) / 10) : 0;
      return {
        difficulty: item.key,
        myCount: item.solved,
        totalCount: item.total,
        mySubmissions: submissions,
        percent,
        color: item.color
      };
    });

    const seen = new Map<string, boolean>();
    this.uniqueRecentSubmissions = [];
    for (const item of profile.recentSubmissions ?? []) {
      if (!item?.titleSlug || seen.has(item.titleSlug)) {
        continue;
      }
      seen.set(item.titleSlug, true);
      this.uniqueRecentSubmissions.push({
        title: item.title,
        titleSlug: item.titleSlug,
        timestamp: item.timestamp,
        statusDisplay: item.statusDisplay,
        lang: item.lang
      });
      if (this.uniqueRecentSubmissions.length >= 8) {
        break;
      }
    }
  }

  private displayExpertiseWithBlink(): void {
    let expertiseArrayCount = 0;
    let shouldChangeExpertise = false;
    let currentExpertise = this.data.Expertise[0].toString();
    let currentExpertiseLength = 0;
    let shouldIncreaseExpertiseLength = true;
    let waitForOneSecond = 0;
    const speedForTypewriter = 50;

    this.timerId = setInterval(() => {
      if (!shouldChangeExpertise) {
        if (currentExpertiseLength >= 0) {
          if (shouldIncreaseExpertiseLength && waitForOneSecond === 0) {
            currentExpertiseLength++;
            if (currentExpertiseLength === currentExpertise.length) {
              shouldIncreaseExpertiseLength = false;
              waitForOneSecond = 10;
            }
          } else if (waitForOneSecond > 0) {
            waitForOneSecond--;
          } else {
            currentExpertiseLength--;
          }
        } else {
          shouldChangeExpertise = true;
          currentExpertiseLength = 0;
        }
      } else {
        expertiseArrayCount = expertiseArrayCount < this.data.Expertise.length - 1 ? expertiseArrayCount + 1 : 0;
        shouldChangeExpertise = !shouldChangeExpertise;
        shouldIncreaseExpertiseLength = true;
        currentExpertise = this.data.Expertise[expertiseArrayCount].toString();
      }

      this.intoText = 'I am into ' + currentExpertise.substring(0, currentExpertiseLength);
      this.cdr.detectChanges();
    }, speedForTypewriter);
  }
}

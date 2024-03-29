import { Component, OnInit } from '@angular/core';
import { getLeetCodeRecentSubmissionList } from 'src/app/data-fetcher/getLeetCodeRecentSubmissionList';
import { getLeetCodeSubmissionStats } from 'src/app/data-fetcher/getLeetCodeSubmissionStats';
import { IGetRecentSubmissionList, IGetSubmissionStats, RecentSubmission } from 'src/app/model/LeetCodeTypes';
import { IStatsFigure } from 'src/app/model/StatsFigure';
import fullData from '../../../assets/data/data.json';
import {Data} from '../../model/ProfileDataInterfaces';

@Component({
  selector: 'app-center',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Data = fullData;
  intoText: String = "I am into ";
  timerId: any;
  userStats: IGetSubmissionStats;
  userRecentSubmissions: IGetRecentSubmissionList;
  uniqueRecentSubmissions: RecentSubmission[] = [];
  statsFigures: IStatsFigure[] = [];
  seriesData: [string, number][] = [];
  selectedDifficulty: string;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.displayExpertiseWithBlink();
    
    const username = 'Sachin131';

    try {
        [this.userStats, this.userRecentSubmissions] = await Promise.all([
        getLeetCodeSubmissionStats(username), 
        getLeetCodeRecentSubmissionList(username)
      ]);
      this.getSortedRecentSubmission(this.userRecentSubmissions);
      this.getStatsFigure(this.userStats);
      this.setSeriesData();
    }
    catch(err){
      console.log(err);
    }
  }

  trackByStatsFigure(index: number, statsFigure: IStatsFigure): IStatsFigure{
    return statsFigure;
  }

  trackByRecentSubmission(index: number, recentSubmission: RecentSubmission): RecentSubmission{
    return recentSubmission;
  }

  ngOnDestroy(): void{
    clearInterval(this.timerId);
  }

  highlightChart(difficulty: string): void{
    this.seriesData = this.seriesData.map(s=>s);
    this.selectedDifficulty = difficulty;
  }

  private getSortedRecentSubmission(userRecentSubmissions: IGetRecentSubmissionList){
    const map = new Map();
    for (const item of userRecentSubmissions.recentSubmissionList) {
        if(!map.has(item.titleSlug)){
            map.set(item.titleSlug, true);   
            this.uniqueRecentSubmissions.push({
                titleSlug: item.titleSlug,
                title: item.title,
                timestamp: item.timestamp,
                statusDisplay: item.statusDisplay,
                lang: item.lang
            });
        }
    }
  }

  private getStatsFigure(userStats: IGetSubmissionStats) {
    
    userStats?.matchedUser.submitStats.acSubmissionNum.forEach((sub,index) => {
      this.statsFigures.push({
        myCount: sub.count,
        mySubmissions: sub.submissions,
        difficulty: sub.difficulty,
        totalCount: userStats?.allQuestionsCount[index]?.count ?? 0
      });
    });
  }

  private setSeriesData(): void{
    if(this.statsFigures.length > 0){
      this.statsFigures.forEach(s=>{
        this.seriesData.push([s.difficulty, s.myCount]);
      });
    }
    else{
      console.log("No stats available");
    }
  }

  private displayExpertiseWithBlink():void{
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


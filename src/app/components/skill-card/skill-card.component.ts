import { Component, OnInit, Input } from '@angular/core';
import {Skill} from '../../model/DataInterfaces';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

  getSkillLevel(myLevel: number, totalLevel: number): string {
    if((myLevel/totalLevel) >= 0.8)
      return "Advanced";
    else if(myLevel/totalLevel >= 0.5)
      return "Intermediate";
    else
      return "Beginner";
  }

}

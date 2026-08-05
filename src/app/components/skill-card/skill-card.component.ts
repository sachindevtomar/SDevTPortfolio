import { Component, Input } from '@angular/core';
import { Skill } from '../../model/ProfileDataInterfaces';

@Component({
  standalone: false,
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skill!: Skill;
  flipped = false;

  toggleFlip(): void {
    this.flipped = !this.flipped;
  }

  getSkillLevel(myLevel: number, totalLevel: number): string {
    const ratio = myLevel / totalLevel;
    if (ratio >= 0.8) {
      return 'Advanced';
    }
    if (ratio >= 0.5) {
      return 'Intermediate';
    }
    return 'Beginner';
  }
}

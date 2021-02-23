import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from '../../model/DataInterfaces'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() exp: WorkExperience;
  constructor() { }

  ngOnInit(): void {
  }

}

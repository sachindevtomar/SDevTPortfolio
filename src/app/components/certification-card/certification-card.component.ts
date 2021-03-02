import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/model/DataInterfaces';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent implements OnInit {
  @Input() cert: Certification;
  @Input() position: number;
  constructor() { }

  ngOnInit(): void {
  }

}

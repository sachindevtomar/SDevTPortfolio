import { Component, Input } from '@angular/core';
import { Certification } from 'src/app/model/ProfileDataInterfaces';

@Component({
  standalone: false,
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent {
  @Input() cert!: Certification;
  @Input() position = 0;
}

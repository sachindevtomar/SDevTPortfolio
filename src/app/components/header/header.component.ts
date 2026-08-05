import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed=true;
  constructor() { }

  ngOnInit(): void {
  }

}

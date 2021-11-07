import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-main',
  templateUrl: './de-main.component.html',
  styleUrls: ['./de-main.component.scss']
})
export class DeMainComponent implements OnInit {
  isCookie = true;

  constructor() {   
  }

  ngOnInit(): void {
    if (localStorage.getItem('cookieAxxessio')) {
      this.isCookie = false;
    }
  }

  save() {
    localStorage.setItem('cookieAxxessio', 'true');
    if (localStorage.getItem('cookieAxxessio')) {
      this.isCookie = false;
    }
  }
}

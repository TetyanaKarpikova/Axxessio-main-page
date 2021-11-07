import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-en-main',
  templateUrl: './en-main.component.html',
  styleUrls: ['./en-main.component.scss']
})
export class EnMainComponent implements OnInit {

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

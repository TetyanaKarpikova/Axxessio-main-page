import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axxessio-web';
  isCookie = true;

  ngOnInit() {
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

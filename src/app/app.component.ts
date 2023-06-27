import { Component } from '@angular/core';
import { INav } from './core/models/icore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navbar: INav[] = [
    {
      navText: 'Explore',
      navUrl: '/explore',
    },
    {
      navText: 'History',
      navUrl: '/history',
    },
  ];

}

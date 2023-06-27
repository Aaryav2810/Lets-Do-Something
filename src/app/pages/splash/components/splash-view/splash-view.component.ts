import { Component, OnInit } from '@angular/core';
import { IImg } from '../../models/isplash';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-splash-view',
  templateUrl: './splash-view.component.html',
  styleUrls: ['./splash-view.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 3000}),
  ]
})
export class SplashViewComponent implements OnInit {
  public welcomeMessage: string[];
  public startButton: string;
  public welcomeIcons: IImg[];

  constructor() {
    this.welcomeMessage = ["Let's Do Something helps you find something new to do.", "Receive a ton of activity ideas and save them to your list to track them.", "If you don't like an activity, simply discard it!"];
    this.startButton = 'Get started';
    this.welcomeIcons = [
      {
        src: '../../../../../assets/images/kite.svg',
        alt: 'Kite',
      },
      {
        src: '../../../../../assets/images/craft.svg',
        alt: 'Craft',
      },
      {
        src: '../../../../../assets/images/bbq.svg',
        alt: 'Barbacue',
      },
    ]
  }

  ngOnInit(): void {
  }

}

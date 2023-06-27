import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Observable, forkJoin } from 'rxjs';

import { PagesService } from 'src/app/services/pages.service';
import { ApiService } from 'src/app/services/api.service';
import { ICard } from 'src/app/shared/models/ishared';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore-view.component.html',
  styleUrls: ['./explore-view.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 500 }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 500 })
  ]
})
export class ExploreViewComponent implements OnInit {
  public apiDataList: ICard[] = [];

  constructor(public pagesService: PagesService, private readonly apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getFullGallery();
  }

  /**
   * Calls to API 9 times in a row to get the full gallery. Each call result is processed through forkJoin.
   */
  private getFullGallery() {
    const callsToApi: Observable<any>[] = [];

    for (let index = 0; index < 9; index++) {
      callsToApi.push(this.apiService.getActivityFromApi());
    }

    forkJoin(callsToApi).subscribe((callResults: any[]) => {
      callResults.forEach((data: any) => this.processCallResult(data));
    });
  }

  /**
   * Calls to API once to get one single activity.
   */
  private getSingleActivity() {
    this.apiService.getActivityFromApi().subscribe((data: any) => this.processCallResult(data));
  }

  /**
   * Checks if the activity has already been called. If it has, it repeats the call to get a new one. If it has not, the activity is pushed into apiDataList.
   */
  private processCallResult(data: any) {
    if (this.apiDataList.find((activity) => data.key === activity.key)
      || this.pagesService.classified.find((activity) => data.key === activity.key)) {
      this.getSingleActivity();
    } else {
      setTimeout(() => {
        this.apiDataList.push(this.transformData(data));
      }, 500);
    }
  }

  /**
   * Processes the raw activity data from API to fit the activity card.
   */
  private transformData(data: ICard) {
    return {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      accessibility: this.transformAccessibility(data.accessibility),
      price: this.transformPrice(data.price),
      key: data.key,
      list: '',
    }
  }

  private transformAccessibility(accessibility: number | string) {
    if (accessibility >= 0 && accessibility <= 0.3) {
      return 'at hand';
    } else if (accessibility > 0.3 && accessibility <= 0.7) {
      return 'available';
    } else if (accessibility > 0.7 && accessibility <= 1) {
      return 'challenging';
    } else {
      return 'unkown';
    }
  }

  private transformPrice(price: number | string) {
    if (price === 0) {
      return 'free';
    } else if (price > 0 && price <= 0.3) {
      return 'inexpensive';
    } else if (price > 0.3 && price <= 0.7) {
      return 'affordable';
    } else if (price > 0.7 && price <= 1) {
      return 'pricey';
    } else {
      return 'unkown';
    }
  }

  private addList(keyFromButton: number, list: string) {
    const activityIndexInList = this.apiDataList.findIndex((activity) => activity.key === keyFromButton);
    this.apiDataList[activityIndexInList].list = list;

    this.pagesService.classified.push(this.apiDataList[activityIndexInList]);
    localStorage.setItem('LetsDoSomething', JSON.stringify(this.pagesService.classified));

    this.apiDataList.splice(activityIndexInList, 1);
    this.getSingleActivity();
  }

  public onDiscardClick(event: any) {
    this.addList(event.target.id, 'discarded');
  }

  public onSaveClick(event: any) {
    this.addList(event.target.id, 'saved');
  }

}

import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

import { PagesService } from 'src/app/services/pages.service';
import { ICard, IHeader } from 'src/app/shared/models/ishared';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 500 }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 500 })
  ]
})
export class HistoryViewComponent implements OnInit {
  public historyHeader: IHeader;

  public visibleListFilter: string[];
  public filteredList!: ICard[];
  public noActivitiesText: string = 'You have not classified any activity yet.'

  constructor(public pagesService: PagesService) {
    this.historyHeader = {
      headerTags: ['saved', 'discarded']
    }

    this.visibleListFilter = ['saved'];
    this.refreshFilteredList();
  }

  ngOnInit(): void {
  }

  public onHistoryTagClick(tag: string) {
    if (this.visibleListFilter.includes(tag)) {
      const tagIndex = this.visibleListFilter.indexOf(tag);
      this.visibleListFilter.splice(tagIndex, 1);
      this.filteredList = this.filteredList.filter( (activity: ICard) => activity.list !== tag);
    } else {
      this.visibleListFilter.push(tag);
      const addActivities = this.pagesService.classified.filter( (activity: ICard) => activity.list === tag);
      this.filteredList = [...this.filteredList, ...addActivities];
    }
  }

  public refreshFilteredList() {
    this.filteredList = this.pagesService.classified.filter( (activity: ICard) => this.visibleListFilter.includes(activity.list) );
    localStorage.setItem('LetsDoSomething', JSON.stringify(this.pagesService.classified));
  }

  public onDiscardClick(event: any) {
    const activity = this.filteredList.find((activity: ICard) => activity.key === event.target.id);
    activity!.list = 'discarded';
    this.refreshFilteredList();
  }

  public onSaveClick(event: any) {
    const activity = this.filteredList.find((activity: ICard) => activity.key === event.target.id);
    activity!.list = 'saved';  
    this.refreshFilteredList();
  }
}

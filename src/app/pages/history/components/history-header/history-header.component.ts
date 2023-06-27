import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { IHeader } from '../../../../shared/models/ishared';

@Component({
  selector: 'app-header',
  templateUrl: './history-header.component.html',
  styleUrls: ['./history-header.component.scss']
})
export class HistoryHeaderComponent implements OnInit {
  @Input() public historyHeaderContent!: IHeader;
  @Input() public visibleTags!: string[];

  @Output() public tagClickEvent = new EventEmitter();

  constructor(public pagesService: PagesService) { }

  ngOnInit(): void {
  }

  public onTagClick(event: any, tag: string) {
    event.target.classList.toggle('header-block__tag--active');
    event.target.classList.toggle('header-block__tag--inactive');
    this.tagClickEvent.emit(tag);
  }
}

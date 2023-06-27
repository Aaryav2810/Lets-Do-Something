import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICard } from '../../models/ishared';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public activity?: ICard;

  @Output() public discardClickEvent = new EventEmitter();
  @Output() public saveClickEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public onDiscardClick(event: any) {
    this.discardClickEvent.emit(event);
  }

  public onSaveClick(event: any) {
    this.saveClickEvent.emit(event);
  }
}

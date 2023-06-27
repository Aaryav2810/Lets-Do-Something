import { Component, Input, OnInit } from '@angular/core';
import { INav } from '../../models/icore';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public navbar!: INav[]; 

  constructor() { }

  ngOnInit(): void {
  }

}

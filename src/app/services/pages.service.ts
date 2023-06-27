import { Injectable } from '@angular/core';
import { ICard } from 'src/app/shared/models/ishared';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public classified: ICard[] = [];

  constructor() {
    let classifiedStorage = localStorage.getItem('LetsDoSomething');
    if (classifiedStorage) this.classified = JSON.parse(classifiedStorage);
  }
}

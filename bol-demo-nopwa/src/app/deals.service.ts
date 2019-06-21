import { Injectable } from '@angular/core';
import * as deals from 'assets/bolTopDealsResult.json'

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor() { }

  get deals() {
    return deals;
  }

  get keys() {
    return Object.keys(deals['default']);
  }

  getItems(key: string): Deal[] {
    return deals['default'][key];
  }

  getItem(key: string, id: string): Deal {
    let items: Deal[] = deals['default'][key];

    return items.find(i => i.id === id);
  }
}

export class Deal {
  id: string;
  name: string;
  url: string;
  image: string;
  price: string;
}

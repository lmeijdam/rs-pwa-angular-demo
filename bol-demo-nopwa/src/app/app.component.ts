import { Component, OnInit } from '@angular/core';
import * as deals from 'assets/bolTopDealsResult.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bol-demo-nopwa';
  books = deals.books;

  ngOnInit(): void {
  //  console.log();
    console.log(deals.books);
  }
}

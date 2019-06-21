import { Component, OnInit } from '@angular/core';
import { DealsService } from '../deals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: string[];
  constructor(private dealsService: DealsService, private router: Router) { }

  ngOnInit() {
    this.categories = this.dealsService.keys;
  }

  itemClicked(e: any) {
    this.router.navigate([e]);
  }

}

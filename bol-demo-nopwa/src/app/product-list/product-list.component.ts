import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from '../deals.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  items: Deal[];
  category: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = this.route.snapshot.data["products"];
    this.route.params.subscribe(param => this.category = param['category']);
  }

  productClicked(e: any) {
    this.router.navigate([e], {relativeTo: this.route});
  }

}

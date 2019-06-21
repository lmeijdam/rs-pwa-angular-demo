import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DealsService } from './deals.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {
  constructor(private dealsService: DealsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dealsService.getItems(route.paramMap.get('category'));
  }
}

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private dealsService: DealsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dealsService.getItem(route.paramMap.get('category'), route.paramMap.get('id'));
  }
}
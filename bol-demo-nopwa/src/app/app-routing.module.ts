import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolver, ProductResolver } from './products.resolver';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent, pathMatch: 'full' },
  { path: ':category', component: ProductListComponent, resolve: { products: ProductsResolver} },
  { path: ':category/:id', component: ProductComponent, resolve: { product: ProductResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

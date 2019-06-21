import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DealsService } from './deals.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsResolver, ProductResolver } from './products.resolver';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DealsService, ProductsResolver, ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

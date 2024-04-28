import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './container/productlist/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    AppRoutingModule,
    CommonModule,
    ProductComponent,
    ProductlistComponent,
    FilterComponent,
    FormsModule, 
    ProductDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProductComponent } from './product/product.component';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { CommonModule } from '@angular/common';


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
    ProductlistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

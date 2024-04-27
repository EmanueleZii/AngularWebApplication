import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductlistComponent } from '../container/productlist/productlist.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContainerComponent, FooterComponent, CommonModule, ProductlistComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 
  constructor() {
   
  }
}

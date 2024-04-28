import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports:[ProductlistComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  

  @Input() productListComp:ProductlistComponent = undefined;

  product: Product;

  ngOnInit(): void {
    this.product = this.productListComp.selectProduct
  }

  
}

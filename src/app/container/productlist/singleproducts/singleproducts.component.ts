import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';


@Component({
  selector: 'app-singleproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproducts.component.html',
  styleUrls: ['./singleproducts.component.css']
 
})

export class SingleproductsComponent {
  @Input()
  product :Product
 
}

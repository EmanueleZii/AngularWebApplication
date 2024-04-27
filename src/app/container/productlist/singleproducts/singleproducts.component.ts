import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singleproducts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproducts.component.html',
  styleUrls: ['./singleproducts.component.css']
 
})

export class SingleproductsComponent {
  @Input()
  product :{ id: number,
    name: string,
    category: string,
    brand: string,
    description: string,
    price: number,
    discount?: number,
    imageUrl: string,
    color: string[],
    itemLeft: number,
    is_In_inventory: boolean,
    slug: string
  }; 
 
  constructor(){

   }
}

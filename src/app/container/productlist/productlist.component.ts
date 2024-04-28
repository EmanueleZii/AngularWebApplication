import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleproductsComponent } from './singleproducts/singleproducts.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from '../../Models/Product';


// Define the Product interface
/*interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  discount: number; // Include the discount property
  imageUrl: string;
  color: string[];
  itemLeft: number;
  is_In_inventory: boolean;
  slug: string;
}*/

@Component({
  selector: 'productlist',
  standalone: true,
  imports: [ CommonModule, SingleproductsComponent, FilterComponent],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent 
{
  //variabili
  sconto:number =  0;
  prezzoscontato: number = parseInt((499.99 / this.sconto * 100).toFixed(0), 10);
  
  selectProduct:Product;

  // array prodotti
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone Apple',
      category: 'Smartphone',
      brand: 'Apple',
      description: 'A high-quality smartphone with advanced features.',
      price: 999.99,
      discount: 50,
      imageUrl: '/assets/IPhone_15.png',
      color: ['White', 'Black', 'Pink', 'Blue'],
      itemLeft: 10,
      is_In_inventory: true,
      slug: 'iPhone15'
    },
    {
      id: 2,
      name: 'Laptop Dell',
      category: 'Laptop',
      brand: 'Dell',
      description: 'Powerful laptop for both work and entertainment.',
      price: 1299.99,
      discount: 60,
      imageUrl: '/assets/Dell_Laptop.jpeg',
      color: ['Silver', 'Black'],
      itemLeft: 5,
      is_In_inventory: true,
      slug: 'Dell_Laptop'
    },
    {
      id: 3,
      name: 'Smart TV Samsung',
      category: 'TV',
      brand: 'Samsung',
      description: 'Immersive viewing experience with stunning visuals.',
      price: 1499.99,
      discount: 20,
      imageUrl: '/assets/Samsung_TV.jpg',
      color: ['Black'],
      itemLeft: 8,
      is_In_inventory: true,
      slug: 'Samsung_TV'
    },
    // Aggiungi altri prodotti qui...
  ];
 
 totalProductCount:number = this.products.length;
 totalProductInStock:number = this.products.filter( p=> p.is_In_inventory === true).length;
 totalProductOutStock:number = this.products.filter( p=> p.is_In_inventory === false ).length;
 
 @Input()
 searcText:string ='';

 selectFilterRadioButton:string ='all';

 OnFilterChange(value:string)
 {
  //console.log(value);
  this.selectFilterRadioButton = value;
 }
}

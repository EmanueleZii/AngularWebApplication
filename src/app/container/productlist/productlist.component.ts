import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productlist',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})

export class ProductlistComponent 
{
  //variabili
  sconto:number =  50;
  prezzoscontato: number = parseInt((499.99 / this.sconto * 100).toFixed(0), 10);

  // array prodotti
  product = [
  {
    id: 1,
    name: 'Smartphone Apple',
    category: 'Smartphone',
    brand: 'Apple',
    description: 'A high-quality smartphone with advanced features.',
    price: this.prezzoscontato,
    discount: this.sconto,
    imageUrl: '/assets/IPhone15.jpg',
    color: ['White', 'Black', 'Pink','Blue'],
    itemLeft: 10,
    is_In_inventory: true,
    slug: 'iPhone15'
  },
  {
    id: 2,
    name: 'Smartphone Apple',
    category: 'Smartphone',
    brand: 'Apple',
    description: 'A sleek and stylish smartphone for modern users.',
    price: this.prezzoscontato,
    discount: this.sconto,
    imageUrl: '/assets/IPhone15.jpg',
    color: ['White', 'Black', 'Pink','Blue'],
    itemLeft: 5,
    is_In_inventory: true,
    slug: 'iPhone15'
  },
  {
    id: 3,
    name: 'Smartphone Apple',
    category: 'Smartphone',
    brand: 'Apple',
    description: 'A sleek and stylish smartphone for modern users.',
    price: this.prezzoscontato,
    discount: this.sconto,
    imageUrl: '/assets/IPhone15.jpg',
    color: ['White', 'Black', 'Pink','Blue'],
    itemLeft: 5,
    is_In_inventory: true,
    slug: 'iPhone15'
  },
  {
    id: 4,
    name: 'Smartphone Apple',
    category: 'Smartphone',
    brand: 'Apple',
    description: 'A sleek and stylish smartphone for modern users.',
    price: this.prezzoscontato,
    discount:   this.sconto,
    imageUrl: '/assets/IPhone15.jpg',
    color: ['White', 'Black', 'Pink','Blue'],
    itemLeft: 5,
    is_In_inventory: true,
    slug: 'iPhone15'
  }
 ]

 //construttore
  constructor(){
    
  }
}

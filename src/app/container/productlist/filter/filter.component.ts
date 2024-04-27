import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock:number = 0;
  @Input()
  outOfStock: number = 0;

  constructor() {}
}
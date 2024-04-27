import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
  @Output()
  selectFiletrRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();
  selectFiletrRadioButton:string = 'all';

   onSelectFilterRadioButtonChanged()
   { 
      this.selectFiletrRadioButtonChange.emit(this.selectFiletrRadioButton);
   }

}

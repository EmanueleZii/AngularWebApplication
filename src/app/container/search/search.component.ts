import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 
  searchText: string = '';
 
  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();
 
  constructor(){

  }

  updateSearchText(event: any): void {
    this.searchText = event.target.value;
  }

  OnSearchTextChange(){
    this.searchTextChange.emit(this.searchText);
  }

}

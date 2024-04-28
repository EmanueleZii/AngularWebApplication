import { ChangeDetectorRef, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-container',
  standalone:true,
  imports: [FooterComponent, SearchComponent, CommonModule, ProductlistComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent{
  
  listOfString: string[] = ["iphone", "ipad", "macbook"]; 
 
  searchText: string = "";

  constructor() {}

  OnSetSearchText(value: string){
    this.searchText = value;
  }

}

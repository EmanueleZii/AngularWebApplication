import { ChangeDetectorRef, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone:true,
  imports: [FooterComponent, SearchComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent{
  listOfString: string[] = ["iphone", "ipad", "macbook"]; 
 
}

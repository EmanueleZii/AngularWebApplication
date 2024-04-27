import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContainerComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 constructor(){}
}

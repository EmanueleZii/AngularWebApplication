import { Component } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {
  mainMenuItem:string[] = ["Home", "About", "Product", "Contact", "New Arrivals","Sales"];
}

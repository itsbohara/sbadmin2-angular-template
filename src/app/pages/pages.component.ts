import { Component } from '@angular/core';

// import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'sba-pages',
  // styleUrls: ['pages.component.scss'],
  
  // templateUrl: './base.component.html'
  
  //todo template for @theme layout
  template: `
    <sba-layout>
      <!-- <nb-menu [items]="menu"></nb-menu> -->
      <router-outlet></router-outlet>
    </sba-layout>
  `,
})
export class PagesComponent {

  // menu = MENU_ITEMS;
}

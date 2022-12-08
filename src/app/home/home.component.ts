import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public bodyInformation: any = [
    { title: 'Html 5', author: 'Timothy', order: '10 Order' },
    { title: 'CSS 3', author: 'John', order: '12 Order' },
    { title: 'Angular', author: 'Berners', order: '15 Order' },
    { title: 'Boostrap', author: 'Lee', order: '18 Order' },
    { title: 'Java', author: 'Berners', order: '19 Order' },
    { title: 'SQL', author: 'John', order: '16 Order' },
    { title: 'Phyton', author: 'Timothy', order: '210 Order' },
    { title: 'SAP', author: 'Lee', order: '11 Order' },
    { title: 'Masthan', author: 'Anthati', order: '14 Order' },
    { title: 'Siva', author: 'Thalla', order: '1 Order' },
    { title: 'Html 5', author: 'Timothy', order: '10 Order' },
    { title: 'CSS 3', author: 'John', order: '12 Order' },
    { title: 'Angular', author: 'Berners', order: '15 Order' },
    { title: 'Boostrap', author: 'Lee', order: '18 Order' },
    { title: 'Java', author: 'Berners', order: '19 Order' },
    { title: 'SQL', author: 'John', order: '16 Order' },
    { title: 'Phyton', author: 'Timothy', order: '210 Order' },
    { title: 'SAP', author: 'Lee', order: '11 Order' },
    { title: 'Masthan', author: 'Anthati', order: '14 Order' },
    { title: 'Html 5', author: 'Timothy', order: '10 Order' },
    { title: 'CSS 3', author: 'John', order: '12 Order' },
    { title: 'Angular', author: 'Berners', order: '15 Order' },
    { title: 'Boostrap', author: 'Lee', order: '18 Order' },
    { title: 'Java', author: 'Berners', order: '19 Order' },
    { title: 'SQL', author: 'John', order: '16 Order' },
    { title: 'Phyton', author: 'Timothy', order: '210 Order' },
    { title: 'SAP', author: 'Lee', order: '11 Order' },
    { title: 'Masthan', author: 'Anthati', order: '14 Order' },
    { title: 'Siva', author: 'Thalla', order: '1 Order' },
    { title: 'Html 5', author: 'Timothy', order: '10 Order' },
    { title: 'CSS 3', author: 'John', order: '12 Order' },
    { title: 'Angular', author: 'Berners', order: '15 Order' },
    { title: 'Boostrap', author: 'Lee', order: '18 Order' },
    { title: 'Java', author: 'Berners', order: '19 Order' },
    { title: 'SQL', author: 'John', order: '16 Order' },
    { title: 'Phyton', author: 'Timothy', order: '210 Order' },
    { title: 'SAP', author: 'Lee', order: '11 Order' },
    { title: 'Masthan', author: 'Anthati', order: '14 Order' },
  ];

  public navBarList = [
    { id: 1, name: 'Customer' },
    { id: 2, name: 'Order' },
    { id: 3, name: 'About' },
    { id: 4, name: 'Profile' },
    { id: 5, name: 'Login' },
  ];

  selectedIndex = 0;
  constructor() {}

  selected(index: number) {
    this.selectedIndex = index;
  }
}

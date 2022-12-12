import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  public ordersList = [
    {
      id: '1',
      product_name: 'OM4',
      price: '8,499',
      original_price: '9,990',
      product_image: 'assets/images/camera.jpg',
      desc: '100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account',
    },
    {
      id: '2',
      product_name: 'Others',
      price: '8,499',
      original_price: '9,990',
      product_image: 'assets/images/natural.jpg',
      desc: '100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account',
    },
    {
      id: '2',
      product_name: 'Mixer',
      price: '8,499',
      original_price: '9,990',
      product_image: 'assets/images/mixer.jpg',
    },
    {
      id: '4',
      product_name: 'Iron',
      price: '8,499',
      original_price: '9,990',
      product_image: 'assets/images/iron.jpg',
    },
    {
      id: '5',
      product_name: 'Natual',
      price: '8,499',
      original_price: '9,990',
      product_image: 'assets/images/hi.jpg',
    },
  ];

  selectedIndex = 0;
  selectedTabName: any = 'Customer';
  constructor(public router: Router) {}

  selected(selectedObj: any, index: number) {
    this.selectedTabName = selectedObj.name;
    this.selectedIndex = index;
  }
  // product details
  selectedProduct(selectedObj: any) {
    console.log('selected obj', selectedObj);

    let objToSend: NavigationExtras = {
      queryParams: {
        selectedObj,
      },
      skipLocationChange: false,
      fragment: 'top',
    };

    this.router.navigate(['/product_details'], {
      state: { productdetails: objToSend },
    });

    // this.router.navigate(['product_details']);
  }
}

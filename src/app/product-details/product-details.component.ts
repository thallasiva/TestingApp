import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  detailProduct: any;
  retriveObjData: any;

  constructor(public route: ActivatedRoute, private router: Router) {
    this.detailProduct = this.router.getCurrentNavigation();
    console.log('this.detailProduct', this.detailProduct);

    let name = this.detailProduct.extras.state;

    this.retriveObjData = name.productdetails.queryParams.selectedObj;
    console.log(this.retriveObjData);
  }
}

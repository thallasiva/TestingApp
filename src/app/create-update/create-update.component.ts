import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationStart,
  Route,
  Router,
} from '@angular/router';

import { filter, map } from 'rxjs/operators';
import { ApiListService } from '../api-list.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss'],
})
export class CreateUpdateComponent implements OnInit {
  detailProduct: any = {};
  currentState$: any;
  appstate$: any;
  back: any;
  bodyName: any;
  titleName: any;
  selectedId: any;
  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    private apiService: ApiListService
  ) {
    const navigation: any = this.router.getCurrentNavigation();
    this.back = navigation.extras.state.bacword;
    console.log('this.appstate$', this.back);
    this.bodyName = this.back.body;
    this.titleName = this.back.title;
    this.selectedId = this.back.id;
  }
  ngOnInit() {}

  updateUserDetails() {
    let temp = {
      title: this.titleName,
      body: this.bodyName,
    };
    this.apiService
      .updateMember(this.selectedId, temp)
      .subscribe((resp: any) => {
        alert('Update Successfully.');
      });
  }
}

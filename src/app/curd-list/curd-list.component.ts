import { Component, OnInit } from '@angular/core';
import { ApiListService } from '../api-list.service';

@Component({
  selector: 'app-curd-list',
  templateUrl: './curd-list.component.html',
  styleUrls: ['./curd-list.component.scss'],
})
export class CurdListComponent implements OnInit {
  usersList: any = [];
  constructor(public service: ApiListService) {}

  ngOnInit() {
    this.getEmpList();
  }

  getEmpList() {
    this.service.getUserListService().subscribe((resp: any) => {
      console.log('response form DB', resp);
      this.usersList = resp;
    });
  }

  // delete specific user in list
  deleteUser(selectedObj: any) {
    this.service.userDelete(selectedObj).subscribe((resp: any) => {
      let index = this.usersList.indexOf(this.usersList);
      this.usersList.splice(index, 1);
      console.log('recored deleted success', this.usersList);
    });
  }
}

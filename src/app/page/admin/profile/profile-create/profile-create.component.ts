import { Component, OnInit } from '@angular/core';

interface User {
  name: string,
  code: string
}

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  userList: User[];
  selectedUser: User;

    constructor() {
      this.userList = [
        {name: 'admin', code: 'admin'},
        {name: 'cashier', code: 'cashier'}
      ];
    }

  ngOnInit(): void {
  }

}

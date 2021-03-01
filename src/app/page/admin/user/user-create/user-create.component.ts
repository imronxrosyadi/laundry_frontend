import { Component, OnInit } from '@angular/core';

interface Role {
  name: string,
  code: string
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  roleList: Role[];
  selectedRole: Role;

    constructor() {
      this.roleList = [
        {name: 'ADM', code: 'ADM'},
        {name: 'CSH', code: 'CSH'}
      ];
    }

  ngOnInit(): void {
  }

}

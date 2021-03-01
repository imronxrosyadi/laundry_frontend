import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-read',
  templateUrl: './role-read.component.html',
  styleUrls: ['./role-read.component.css']
})
export class RoleReadComponent implements OnInit {

  role: string[];

  constructor() { }

  ngOnInit(): void {
    this.role = [' ']
  }

}

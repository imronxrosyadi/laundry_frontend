import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  user: string[];

  constructor() { }

  ngOnInit(): void {
    this.user = [' ']
  }

}

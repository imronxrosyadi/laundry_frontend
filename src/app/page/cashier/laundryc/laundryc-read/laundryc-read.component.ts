import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laundryc-read',
  templateUrl: './laundryc-read.component.html',
  styleUrls: ['./laundryc-read.component.css']
})
export class LaundrycReadComponent implements OnInit {

  laundry: string[];

  constructor() { }

  ngOnInit(): void {
    this.laundry = [' ']
  }

}

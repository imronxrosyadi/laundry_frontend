import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laundry',
  templateUrl: './laundry.component.html',
  styleUrls: ['./laundry.component.css']
})
export class LaundryComponent implements OnInit {

  laundry: string[];

  constructor() { }

  ngOnInit(): void {
    this.laundry = [' ']
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerc-read',
  templateUrl: './customerc-read.component.html',
  styleUrls: ['./customerc-read.component.css']
})
export class CustomercReadComponent implements OnInit {

  cust: string[];

  constructor() { }

  ngOnInit(): void {
    this.cust = [' ']
  }

}

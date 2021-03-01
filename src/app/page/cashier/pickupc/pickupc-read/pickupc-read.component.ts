import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickupc-read',
  templateUrl: './pickupc-read.component.html',
  styleUrls: ['./pickupc-read.component.css']
})
export class PickupcReadComponent implements OnInit {

  pickup: string[];

  constructor() { }

  ngOnInit(): void {
    this.pickup = [' ']
  }

}

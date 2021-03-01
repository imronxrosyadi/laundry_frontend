import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {

  pickup: string[];

  constructor() { }

  ngOnInit(): void {
    this.pickup = [' ']
  }

}

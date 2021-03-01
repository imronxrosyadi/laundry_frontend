import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-read',
  templateUrl: './payment-read.component.html',
  styleUrls: ['./payment-read.component.css']
})
export class PaymentReadComponent implements OnInit {

  pay: string[];

  constructor() { }

  ngOnInit(): void {
    this.pay = [' ']
  }

}

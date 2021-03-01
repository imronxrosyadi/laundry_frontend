import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboardc',
  templateUrl: './dashboardc.component.html',
  styleUrls: ['./dashboardc.component.css']
})
export class DashboardcComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Master',
        items: [
          {
            label: 'Customer',
            routerLink: 'list-customer'
          }
      ]},
      {
        label: 'Transaction',
        items: [
          {
            label: 'Laundry',
            routerLink: 'list-laundry'
          },
          {
            label: 'Pickup',
            routerLink: 'list-pickup'
          }
        ]
      }
    ];
  }

}

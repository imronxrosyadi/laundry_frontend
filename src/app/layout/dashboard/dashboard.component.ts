import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Master',
        items: [
          {
            label: 'Customer',
            routerLink: 'list-customers'
          },
          {
            label: 'Payment',
            routerLink: 'list-payments'
          },
          {
            label: 'Perfume',
            routerLink: 'list-perfumes'
          },
          {
            label: 'Service',
            routerLink: 'list-services'
          },
          {
            label: 'Status',
            routerLink: 'list-statuses'
          },
          {
            label: 'Profile',
            routerLink: 'list-profiles'
          },
          {
            label: 'Role',
            routerLink: 'list-roles'
          },
          {
            label: 'User',
            routerLink: 'list-users'
          }
      ]},
      {
        label: 'Transaction',
        items: [
          {
            label: 'Laundry',
            routerLink: 'list-laundries'
          },
          {
            label: 'Pickup',
            routerLink: 'list-pickups'
          }
        ]
      }
    ];
  }

}

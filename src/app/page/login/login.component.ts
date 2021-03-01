import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private route: Router) { }

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {label: 'Home'},
      {label: 'About'},
      {label: 'Services'},
      {label: 'Contact'}
    ];
  }
  
  login() {
    if(this.username == 'admin') {
      this.route.navigateByUrl('/admin')
    } else if( this.username == 'cashier') {
      this.route.navigateByUrl('/cashier')
    }
  }
}

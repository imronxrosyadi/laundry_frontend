import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-read',
  templateUrl: './service-read.component.html',
  styleUrls: ['./service-read.component.css']
})
export class ServiceReadComponent implements OnInit {

  service: string[];

  constructor() { }

  ngOnInit(): void {
    this.service = [' ']
  }

}

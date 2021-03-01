import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-read',
  templateUrl: './status-read.component.html',
  styleUrls: ['./status-read.component.css']
})
export class StatusReadComponent implements OnInit {

  status: string[];

  constructor() { }

  ngOnInit(): void {
    this.status = [' ']
  }

}

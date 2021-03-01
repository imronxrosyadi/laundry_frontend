import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laundry-detailc-read',
  templateUrl: './laundry-detailc-read.component.html',
  styleUrls: ['./laundry-detailc-read.component.css']
})
export class LaundryDetailcReadComponent implements OnInit {

  dtlLaundry: string[];

  constructor() { }

  ngOnInit(): void {
    this.dtlLaundry = [' ']
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laundry-detail',
  templateUrl: './laundry-detail.component.html',
  styleUrls: ['./laundry-detail.component.css']
})
export class LaundryDetailComponent implements OnInit {

  dtlLaundry: string[];

  constructor() { }

  ngOnInit(): void {
    this.dtlLaundry = [' ']
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfume-read',
  templateUrl: './perfume-read.component.html',
  styleUrls: ['./perfume-read.component.css']
})
export class PerfumeReadComponent implements OnInit {

  perfume: string[];

  constructor() { }

  ngOnInit(): void {
    this.perfume = [' ']
  }

}

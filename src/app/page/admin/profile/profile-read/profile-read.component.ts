import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-read',
  templateUrl: './profile-read.component.html',
  styleUrls: ['./profile-read.component.css']
})
export class ProfileReadComponent implements OnInit {

  profile: string[];

  constructor() { }

  ngOnInit(): void {
    this.profile = [' ']
  }

}

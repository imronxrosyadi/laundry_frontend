import { Component, OnInit } from '@angular/core';
import { LaundryDetail } from 'src/app/data-dropdown/laundry-detail';

@Component({
  selector: 'app-pickupc-create',
  templateUrl: './pickupc-create.component.html',
  styleUrls: ['./pickupc-create.component.css']
})

export class PickupcCreateComponent implements OnInit {

    dtlCodeList: LaundryDetail[];
    selectedDtlCode: LaundryDetail;

    constructor() {
      this.dtlCodeList = [
        {name: 'LDC001', code: 'LDC001'},
        {name: 'LDC002', code: 'LDC002'},
        {name: 'LDC003', code: 'LDC003'},
        {name: 'LDC004', code: 'LDC004'}
      ];
    }

  ngOnInit(): void {
  }

}

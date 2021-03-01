import { Component, OnInit } from '@angular/core';
import { Data2 } from 'src/app/data-dropdown/data2';
import { Data3 } from 'src/app/data-dropdown/data3';
import { Data4 } from 'src/app/data-dropdown/data4';
import { Data5 } from 'src/app/data-dropdown/data5';
import { LaundryDetail } from 'src/app/data-dropdown/laundry-detail';

@Component({
  selector: 'app-laundryc-create',
  templateUrl: './laundryc-create.component.html',
  styleUrls: ['./laundryc-create.component.css']
})
export class LaundrycCreateComponent implements OnInit {

  cust: LaundryDetail[];
  selectedCust: LaundryDetail;
  pay: Data2[];
  selectedPay: Data2;
  service: Data3[];
  selectedService: Data3;
  perfume: Data4[];
  selectedPerfume: Data4;
  status: Data5[];
  selectedStatus: Data5;
  dtlLaundry: string[];
  
    constructor() {
      this.cust = [
        {name: 'CST001', code: 'CST001'},
        {name: 'CST002', code: 'CST002'},
        {name: 'CST003', code: 'CST003'},
        {name: 'CST004', code: 'CST004'}
      ];

      this.pay = [
        {name: 'PAY001', code: 'PAY001'},
        {name: 'PAY002', code: 'PAY002'},
        {name: 'PAY003', code: 'PAY003'},
        {name: 'PAY004', code: 'PAY004'}
      ];

      this.service = [
        {name: 'SERV01', code: 'SERV01'},
        {name: 'SERV02', code: 'SERV02'},
        {name: 'SERV03', code: 'SERV03'}
      ];

      this.perfume = [
        {name: 'PFM001', code: 'PFM001'},
        {name: 'PFM002', code: 'PFM002'},
        {name: 'PFM003', code: 'PFM003'},
        {name: 'PFM004', code: 'PFM004'}
      ];

      this.status = [
        {name: 'DONE', code: 'DONE'},
        {name: 'PEND', code: 'PEND'},
        {name: 'LOST', code: 'LOST'}
      ];
    }

  ngOnInit(): void {
    this.dtlLaundry = [' ']
  }

}

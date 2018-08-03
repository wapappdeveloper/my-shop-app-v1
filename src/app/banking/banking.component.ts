import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styles: []
})
export class BankingComponent implements OnInit {
  totalAmount:number = 0;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getTotalCostToPay();
  }
  ngDoCheck(){
    this.totalAmount = this.commonService.getTotalPay();
  }
  getTotalCostToPay(){
    this.totalAmount = this.commonService.getTotalPay();
  }

}

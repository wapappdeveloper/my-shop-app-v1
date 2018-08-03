import { Component, OnInit } from '@angular/core';
import { CommonModel, CountModel } from '../shared/common.model';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: []
})
export class CheckoutComponent implements OnInit {
  totalAmount:number;
  itemList:CommonModel[] = [];
  itemCount:CountModel[] = [];
  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit() {
    this.totalAmount = 0;
    this.getItemListAndItemCount();
  }
  ngOnChanges(){
    //console.log('i am changing');
  }
  ngDoCheck(){
    //console.log('i am checking');
    this.totalAmount = 0;
    this.itemList.map((elmL, indexL)=>{
      this.itemCount.map((elmC, indexC)=>{
        if(elmL.name === elmC.name){
          this.totalAmount = this.totalAmount + (elmL.price * elmC.count);
          return;
        }
      });
    });
    //console.log(this.totalAmount);
    this.commonService.totalAmount = this.totalAmount;
  }
  getItemListAndItemCount(){
    this.itemList = this.commonService.getItemList('checkout');
    this.itemCount = this.commonService.getItemCount();
  }
  navigateTo(page:string){
    this.router.navigateByUrl(page);
  }
  getItemCountByName(nameOfItem:string){
    var count:number = 0;
    this.itemCount.map((elm, index)=>{
      if(elm && elm.name && elm.name===nameOfItem){
        count = elm.count;
      }
    });
    return count;
  }
}

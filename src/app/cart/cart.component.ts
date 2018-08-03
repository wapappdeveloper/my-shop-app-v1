import { Component, OnInit } from '@angular/core';
import { CommonModel, CountModel } from '../shared/common.model';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  itemList:CommonModel[] = [];
  itemCount:CountModel[] = [];

  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit() {
    //console.log('ngOnInit');
    this.getItemListAndItemCount();
  }

  getItemListAndItemCount(){
    this.itemList = this.commonService.getItemList('cart');
    this.itemCount = this.commonService.getItemCount();
    //console.log(this.itemCount);
  }

  removeItem(item:CommonModel){
    this.commonService.removeItemFromCart(item);
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

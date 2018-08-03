import { Component, OnInit } from '@angular/core';
import { CommonModel, CountModel } from '../shared/common.model';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styles: []
})
export class ShoppingComponent implements OnInit {
  itemList: CommonModel[] = [];
  itemCount:CountModel[] = [];

  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit() {
    //console.log('ngOnInit');
    this.getItemListAndItemCount();
    if(this.itemList.length===0){
      //console.log('i am try to load JSON');
      this.loadItemListFromJson();
    }else{
      this.setItemListAndItemCount();
    }
  }

  ngDoCheck(){
    //console.log(this.itemList);
  }

  getItemListAndItemCount(){
    this.itemList = this.commonService.getItemList('shopping');
    this.itemCount = this.commonService.getItemCount();
  }

  setItemListAndItemCount(){
    this.commonService.setItemList('shopping', this.itemList);
    this.commonService.setItemCount(this.itemCount);
  }

  loadItemListFromJson(){
    this.commonService.loadJson('../../assets/data/item-list.json', (res)=>this.itemListLoadedFromJson(res), (res, error)=>this.itemListNotLoadedFromJson(res, error));
  }

  itemListLoadedFromJson(data:any){
    //console.log(data);
    console.log('data loaded successfully');
    this.itemList = data;
    this.itemList.map((elm, index)=>{
      this.itemCount[index] = {name:elm.name, count: 0};
    });
    this.setItemListAndItemCount();
  }

  itemListNotLoadedFromJson(data:any, error:any){
    this.itemList = data;
    this.itemList.map((elm, index)=>{
      this.itemCount[index] = {name:elm.name, count: 0};
    });
    this.setItemListAndItemCount();
    console.log(error);
  }

  addItem(item:CommonModel){
    this.commonService.addItemToCart(item);
    this.itemCount = this.commonService.getItemCount();
    //console.log(this.itemCount);
  }

  navigateTo(page:string){
    this.router.navigateByUrl(page);
  }

}

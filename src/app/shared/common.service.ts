import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import { CommonModel, CountModel } from './common.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {
  itemsInShop:CommonModel[] = [];
  itemsOnCart:CommonModel[] = [];
  itemsDefault:CommonModel[] = [
    { name: "apple", description: "fruit", unit:"1kg", price:100},
    { name: "kitkat", description: "chocolate", unit:"100gm", price:10},
    { name: "nailpolist", description: "cosmetics", unit:"25ml", price:40},
    { name: "bovonto", description: "cooldrink", unit:"500ml", price:20},
    { name: "shirt", description: "costume", unit:"1nos", price:250}
  ];
  itemsOfCount:CountModel[] = [];

  totalAmount:number = 0;

  constructor(private http:Http) { }

  loadJson(url:string, success:Function, fail?:Function){
    this.getJson(url).subscribe(data => {
      var data:any = data;
      success.call(this, data);
    }, error => {
      if(fail===undefined){
        console.log(error);
      }else{
        fail.call(this, this.itemsDefault, error);
      }
    });
  }
  private getJson(url:string):Observable<any>{
    return this.http.get(url)
      .map(res => res.json())
      .catch(error => error);
  }

  addItemToCart(item:CommonModel){
    var indexInCart:number = this.itemsOnCart.indexOf(item);
    var indexInShop:number = this.itemsInShop.indexOf(item);
    if(indexInCart===-1){
      this.itemsOnCart.push(item);
    }else{
      //console.log('The selected item added again');
    }
    this.itemsOfCount[indexInShop].count = this.itemsOfCount[indexInShop].count + 1;
  }

  removeItemFromCart(item:CommonModel){
    var indexInCart:number = this.itemsOnCart.indexOf(item);
    var indexInShop:number = this.itemsInShop.indexOf(item);
    if(indexInCart!==-1){
      if(this.itemsOfCount[indexInShop].count > 0){
        this.itemsOfCount[indexInShop].count = this.itemsOfCount[indexInShop].count - 1;
        (this.itemsOfCount[indexInShop].count === 0)?this.itemsOnCart.splice(indexInCart, 1):'';
      }else{
        this.itemsOnCart.splice(indexInCart, 1);
      }
    }else{
      console.log('The item try to remove is not in cart, please check the itemsOnCart array');
    }
  }

  getItemCount(){
    return this.itemsOfCount;
  }

  setItemCount(itemCount:CountModel[]){
    this.itemsOfCount = itemCount;
  }

  getItemList(page:string){
    if(page === 'shopping'){
      return this.itemsInShop;
    }else if(page === 'cart'){
      return this.itemsOnCart;
    }else if(page === 'checkout'){
      return this.itemsOnCart;
    }else{
      return this.itemsDefault;
    }
  }

  setItemList(page:string, itemList:CommonModel[]){
    if(page === 'shopping'){
      this.itemsInShop = itemList;
    }else if(page === 'cart'){
      this.itemsOnCart = itemList;
    }else if(page === 'checkout'){
      this.itemsOnCart = itemList;
    }else{
      this.itemsDefault = itemList;
    }
  }

  getTotalPay(){
    return this.totalAmount;
  }
}

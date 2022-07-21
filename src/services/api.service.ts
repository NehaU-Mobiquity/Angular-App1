import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
  constructor(private http: HttpClient) {}
  cartItems:any = [];
   cartCount = new Subject<number>();
  getData():Observable<any>{
    const url ='/assets/data.json';
    return this.http.get<any>(url)
  }
  addItemstoCart(item:any){
    // for (let i = 1; i <= item.count; i++) {
    //   this.cartItems.push(item);
    // } ;
    this.cartItems.push(item);
    console.log(this.cartItems);
  }
  getCartitems():Observable<any> {
    return of(this.cartItems);}

}

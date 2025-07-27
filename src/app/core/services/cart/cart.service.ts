import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
    myId:any=localStorage.getItem('userId');
    cartId:any = localStorage.getItem('cartId');

  addProductToCart(id:number,products:any[]):Observable<any>{
    return this.httpClient.post(`https://fakestoreapi.com/carts`,{
      "id":this.cartId,
       "userId": this.myId,
       "products":products[id - 1]
      })
  }
   getCartWithProducts(): Observable<any> {
  return this.httpClient.get(`https://fakestoreapi.com/carts/${this.myId}`)
  }
}

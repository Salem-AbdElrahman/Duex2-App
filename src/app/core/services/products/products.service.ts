import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
  return this.httpClient.get(`https://fakestoreapi.com/products`)
  }
getSpecificProducts(id: string | null): Observable<any> {
  return this.httpClient.get<any>(`https://fakestoreapi.com/products/${id}`);
}

}

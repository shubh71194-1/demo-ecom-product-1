import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../beans/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:3000/products", product);
  }
}

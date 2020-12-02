import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productsUrl: string = 'assets/data/goods.json';

  constructor(private http: HttpClient) { }

  public fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}

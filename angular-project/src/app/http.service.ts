import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable({
    providedIn: 'root'
})
export class HttpService{

    private productsUrl: string = 'assets/data/goods.json';

    private _products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    public readonly products: Observable<Product[]> = this._products.asObservable();


    constructor(private http: HttpClient) {
        this.loadProductList();
    }

    loadProductList() {
        this.http.get(this.productsUrl).subscribe(
            data => {
                let productsList = data["goods"];
                let products = productsList.map(function(product:any) {
                    return {
                        name: product.name,
                        description: product.description,
                        img: product.img,
                        price: product.price
                    };
                });

                this._products.next(products);
            }
        )
    }

    getProducts() {
        return this._products;
    }
    /*   
    getProducts() : Observable<Product[]> {
        return this.http.get(this.productsUrl).pipe(map(data => {
            let productsList = data["goods"];
            return productsList.map(function(product:any) {
                return {
                    name: product.name,
                    description: product.description,
                    img: product.img,
                    price: product.price
                };
            });
        }));
    }
    */
    getProduct(id: number) : Observable<Product> {
        return this.getProducts().pipe(
            map(products => products.find((product, index) => index === id))
        );
    }
    

    addProduct(newProduct:Product) {
        this._products.next([...this._products.value, newProduct]);
    }
}
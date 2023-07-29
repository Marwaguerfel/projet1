import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(  private http: HttpClient,
               ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl + 'product').pipe(
      map((products) => {
        products.forEach((product) => {
          product.image = `${environment.baseUrl}${product.image}`;
        });
        return products;
      }),

    );
  }
}

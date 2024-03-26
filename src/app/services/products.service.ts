import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/shopping';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public api = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getById(id: number): Observable<Product> {
    const url = `${this.api}/${id}`;
    return this.http.get<Product>(url);
  }

}

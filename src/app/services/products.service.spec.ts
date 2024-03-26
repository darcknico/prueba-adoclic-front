import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/shopping';
import { of } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all', fakeAsync(() => {
    const response = [
      {
        "id": 1,
        "title": "Fjallraven",
        "price": 109.95,
        "description": "Your perfect pack...",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      }
    ];

    service.getAll().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: service.api,
    });
    req.flush(response);
  }));

  it('should get one', () => {
    const response = {
      "id": 1,
      "title": "Fjallraven",
      "price": 109.95,
      "description": "Your perfect pack...",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    };
    service.getById(1).subscribe((resp) => {
      expect(resp).toEqual(response);
    });
    const req = httpMock.expectOne({
      method: 'GET',
      url: `${service.api}/1`,
    });
    req.flush(response);
  });
});

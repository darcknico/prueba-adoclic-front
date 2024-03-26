import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingComponent } from './shopping.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingComponent],
      imports: [NgbModule, HttpClientModule, FormsModule, MatTableModule],
      providers: [ProductsService,AuthService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

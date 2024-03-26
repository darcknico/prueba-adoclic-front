import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalComponent } from './product-modal.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ProductModalComponent', () => {
  let component: ProductModalComponent;
  let fixture: ComponentFixture<ProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductModalComponent],
      imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgbModule
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

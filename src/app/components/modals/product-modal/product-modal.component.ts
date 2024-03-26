import { Component, Input } from '@angular/core';
import { Product } from '../../../models/shopping';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  @Input() public data: Product;

  constructor(
    public activeModal: NgbActiveModal,
  ) {

  }

  closeModal(): void {
    this.activeModal.close();
  }
}

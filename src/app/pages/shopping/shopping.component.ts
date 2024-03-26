import { Component } from '@angular/core';
import { Product } from '../../models/shopping';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { ProductModalComponent } from '../../components/modals/product-modal/product-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
  displayedColumns: string[] = ['id', 'title', 'price', 'category','actions'];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  itemsPerPageOptions = [5, 10, 15, 20];
  itemsPerPage = 10;
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.dataSource = new MatTableDataSource<Product>(products);
      this.filteredProducts = products;
      this.categories = Array.from(new Set(products.map(product => product.category)));
    });
  }

  openProductDetailModal(product: Product) {
    const modalRef = this.modalService.open(ProductModalComponent, { centered: true});
    modalRef.componentInstance.data = product;
  }

  onChangeCategory(event: any) {
    const value = event.target.value
    value === "all"? this.dataSource.filter = '' : this.dataSource.filter = value;
  }

  logout() {
    this.authService.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 peoducts !: Product[];
  
 
 constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(
      tap((product: Product[]) => this.products = product)
    )
    .subscribe();
  }

}

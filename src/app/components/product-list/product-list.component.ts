import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  numberOfPages: number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProduct();
    this.getNumberOfPages();
  }

  listProduct() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  getNumberOfPages() {
    this.productService.getNumberOfPage().subscribe(
      data => {
        this.numberOfPages = data;
      }
    )
  }
}

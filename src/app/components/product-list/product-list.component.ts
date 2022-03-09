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
  currentPage: number;
  pageNo: number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPages();
    this.listProduct();
  }

  setPageNo(pageSetter: number){
    this.pageNo = pageSetter;
    this.listProduct();
    this.getPages();
  }

  listProduct() {
    this.productService.getProductList(this.pageNo).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  getPages() {
    this.productService.getCurrentPages(this.pageNo).subscribe(
      data => {
        this.currentPage = data;
      }
    )
  }

}

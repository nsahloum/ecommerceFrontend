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
  maxPages: number
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPages();
    this.getMaxPage();
    this.listProduct();
  }

  getMaxPage(){
    this.productService.getMaxPage().subscribe(
      data => {
        this.maxPages = data;
      }
    )
  }

  setPageNo(pageSetter: number){
    if (pageSetter >= this.maxPages){
      this.pageNo = this.maxPages - 1;
    }
    else{
      this.pageNo = pageSetter;
    }
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

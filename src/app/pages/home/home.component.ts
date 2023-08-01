import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/beans/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    });
  }
}

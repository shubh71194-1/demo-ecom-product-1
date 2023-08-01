import { Component, Input } from '@angular/core';
import { Cart, Product } from 'src/app/beans/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product! : Product;

  static cartCount = 0;
  cartItem! : Cart;

  constructor(private productService: ProductService){}

  AddItemToCart(){
    this.cartItem.id = ++ProductCardComponent.cartCount;
  }
}

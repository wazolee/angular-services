import { Component, Inject } from '@angular/core';
import { Product } from '@shared/product.model';
import { CartService } from '@core/cart.service';
import { Observable } from 'rxjs';
import { IProductsService, IProductsServiceToken } from '@shared/products.service.interface';

@Component({
  selector: 'bot-catalog',
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: []
})
export class SquadCatalogComponent {
  squad: Observable<Product[]> = this.engineersService.getProducts();

  constructor(@Inject(IProductsServiceToken) private engineersService: IProductsService, private cartService: CartService) { }

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CART_OPTIONS_TOKEN, CartService } from '@core/cart.service';
import { EngineersService } from './engineers.service';
import { IProductsServiceToken } from '@shared/products.service.interface'

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [CartService,
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: {
        persistenceType: 'local',
        persistentKey: 'squad-cart',
      }
    },
    {
      provide: IProductsServiceToken,
      useClass: EngineersService
    }
  ],
})
export class SquadModule { } import { share } from 'rxjs';


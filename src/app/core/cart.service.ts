import { computed, Inject, Injectable, InjectionToken, signal } from "@angular/core";
import { Product } from "@shared/product.model";

// export const CART_SERVICE_TOKEN = new InjectionToken<CartService>('CartService');

type CartOptions = {
    persistenceType: string,
    persistentKey: string,
}

export const CART_OPTIONS_TOKEN = new InjectionToken<CartOptions>('CART_OPTIONS');

@Injectable({ providedIn: 'root' })
export class CartService {
    private cartItems = signal<Product[]>([]);
    
    constructor(@Inject(CART_OPTIONS_TOKEN) private cartOptions: CartOptions) {
        if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
            const cartString = localStorage.getItem(this.cartOptions.persistentKey);
            const cart: Product[] = cartString ? JSON.parse(cartString) as Product[] : [];
            this.cartItems.set(cart);
        }
    }

    get cart() {
        return this.cartItems.asReadonly();
    }

    add(product: Product) {
        this.cartItems.update((oldCart) => [...oldCart, product]);
        this.storeCart();
    }

    remove(product: Product) {
        this.cartItems.update((oldCart) => oldCart.filter(p => p !== product));
        this.storeCart();
    }

    private storeCart() {
        if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
            localStorage.setItem(this.cartOptions.persistentKey, JSON.stringify(this.cartItems()));
        }
    }

    get cartTotal() {
        return computed(() => this.cartItems().reduce((prev, next) => {
            let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
            return prev + next.price * discount;
        }, 0));
    }

}
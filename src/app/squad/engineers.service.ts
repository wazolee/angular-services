import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "@shared/product.model";
import { IProductsService } from "@shared/products.service.interface";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class EngineersService implements IProductsService {


    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/api/engineers');
    }

}
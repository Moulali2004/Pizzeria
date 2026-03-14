import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private httpClient: HttpClient) {}

  getCartItems() : any {
    return this.httpClient.get('http://localhost:3000/cart/items');
  }

  removeCartItem(itemId: string) : any {
    return this.httpClient.delete("http://localhost:3000/cart/delete-item/" + itemId);
  }

  clearCart() {
    return this.httpClient.delete('http://localhost:3000/cart/clear');
  }
}

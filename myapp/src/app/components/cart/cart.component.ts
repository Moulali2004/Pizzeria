import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../../services/ingredients.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: false
})
export class CartComponent {
  items: any[] = [];
  totalPrice: number = 0;

  ingredients: any[] = [];
  customPizzaQuantity: number = 1;
  variableIngredientPrice: number = 0;

  constructor(
    private httpClient: HttpClient,
    private ingredientService: IngredientsService,
    private router: Router,
    private cartService: CartService
  ) {
    this.ingredients = this.ingredientService.ingredients;
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(
      (response: any) => {
        const data = response as any[];
        this.items = data.map(item => ({
          ...item,
          quantity: 1,
          originalPrice: item.price
        }));
      }
    );
  }

  increaseQuantityOfCustomPizza() {
    this.customPizzaQuantity++;
  }

  decreaseQuantityOfCustomPizza() {
    if (this.customPizzaQuantity > 1) {
      this.customPizzaQuantity--;
    }
  }

  increseQuantity(item: any) {
    item.quantity++;
    item.price = item.originalPrice * item.quantity;
  }

  getTotalCustomPizzaPrice(): number {
    this.variableIngredientPrice = this.ingredientService.totalIngredientPrice * this.customPizzaQuantity;
    return this.variableIngredientPrice;
  }

  decreseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.price = item.originalPrice * item.quantity;
    }
  }

  getTotalPrice(): number {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    return this.totalPrice + this.getTotalCustomPizzaPrice();
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item._id).subscribe(
      (response: any) => {
        this.items = this.items.filter(i => i._id !== item._id);
      }
    )
  }

  removeCustomPizza() {
    this.ingredients = [];
    this.ingredientService.ingredients = [];
    this.ingredientService.totalIngredientPrice = 0;
    this.customPizzaQuantity = 1;
  }

  /**
   * Called when user clicks Place Order.
   * Clears server cart, resets local items and custom pizza state,
   * then navigates to order page.
   */
  placeOrder() {
    // clear backend cart
    this.cartService.clearCart().subscribe(
      () => {
        // reset frontend state
        this.items = [];
        this.removeCustomPizza();
        // navigate after clearing is done
        this.router.navigate(['/orderPage']);
      },
      err => {
        console.error('Failed to clear cart on server', err);
        // still navigate but user might see stale data until reload
        this.items = [];
        this.removeCustomPizza();
        this.router.navigate(['/orderPage']);
      }
    );
  }
}

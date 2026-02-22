import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any[] = [];
  totalPrice: number = 0;

  ingredients: any[] = [];
  customPizzaQuantity: number = 1;
  variableIngredientPrice: number = 0;

  constructor(private httpClient: HttpClient, private ingredientService: IngredientsService) {
    this.ingredients = this.ingredientService.ingredients;
  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/cart/items").subscribe(
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
    this.httpClient.delete("http://localhost:3000/cart/delete-item/" + item._id).subscribe(
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
  
}

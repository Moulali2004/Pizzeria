import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderpizzaService } from 'src/app/services/orderpizza.service';

@Component({
    selector: 'app-orderpizza',
    templateUrl: './orderpizza.component.html',
    styleUrls: ['./orderpizza.component.css'],
    standalone: false
})
export class OrderpizzaComponent {
  pizzas: any;

  constructor(
    private orderPizzaService: OrderpizzaService,
    private cartService: CartService
    ) {}

  ngOnInit() {
    this.orderPizzaService.getAllPizzas().subscribe(
      (response) => {
        this.pizzas = response;
      }
    )
  }

  addToCart(pizza: any) {
    this.cartService.addPizzaToCart(pizza).subscribe(
      (response: any) => {
        alert(pizza.name + " " + response.message);
      }
    )
  }
}

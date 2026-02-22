import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent {
  pizzas: any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get("http://localhost:3000/pizzas/get-all-pizzas").subscribe(
      (response) => {
        this.pizzas = response;
      }
    )
  }

  addToCart(pizza: any) {
    this.httpClient.post("http://localhost:3000/cart/add-to-cart", pizza).subscribe(
      (response: any) => {
        alert(pizza.name + " " + response.message);
      }
    )
  }
}

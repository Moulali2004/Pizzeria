import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderpizzaService {
  constructor(private httpClient: HttpClient) {}

  getAllPizzas() {
    return this.httpClient.get("http://localhost:3000/pizzas/get-all-pizzas");
  }
}

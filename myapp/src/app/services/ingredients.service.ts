import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  ingredients: any[] = [];
  totalIngredientPrice: number = 0;
  constructor(private httpClient: HttpClient) { }

  getIngredients() {
    return this.httpClient.get("http://localhost:3000/ingredients/get-ingredients");
  }
}

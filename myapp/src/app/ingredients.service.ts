import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  ingredients: any[] = [];
  totalIngredientPrice: number = 0;
  constructor() { }
}

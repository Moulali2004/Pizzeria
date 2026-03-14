import { Component } from '@angular/core';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
    selector: 'app-buildurpizza',
    templateUrl: './buildurpizza.component.html',
    styleUrls: ['./buildurpizza.component.css'],
    standalone: false
})

export class BuildurpizzaComponent {
    ingredientData: any;
    totalPrice: number = 0;


    constructor(private ingredientService: IngredientsService) {

    }

    ngOnInit(): void {
      this.ingredientService.getIngredients().subscribe(
        (response: any) => {
          this.ingredientData = response;
        }
      );
    }

    onCheckBoxChange(event: any, data: any) {
      if(event.target.checked) {
        this.totalPrice += data.price;
        this.ingredientService.totalIngredientPrice = this.totalPrice;
        this.ingredientService.ingredients.push(data);
      } else {
        this.totalPrice -= data.price;
        this.ingredientService.totalIngredientPrice = this.totalPrice;
        const index = this.ingredientService.ingredients.findIndex((ingredient) => ingredient._id === data._id);
        if(index !== -1) {
          this.ingredientService.ingredients.splice(index, 1);
        }
      }
    }

    buildUrPizza() {
      alert("Your Custom Pizza is being prepared! Go to Cart to place the order.");
    }
}

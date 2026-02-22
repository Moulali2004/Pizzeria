import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildurpizzaComponent } from './buildurpizza/buildurpizza.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { CartComponent } from './cart/cart.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'buildurpizza', component: BuildurpizzaComponent},
  {path: 'orderpizza', component: OrderpizzaComponent},
  {path: 'cart', component: CartComponent},
  {path: 'orderPage', component: OrderpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

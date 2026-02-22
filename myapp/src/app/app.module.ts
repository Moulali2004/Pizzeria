import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BuildurpizzaComponent } from './buildurpizza/buildurpizza.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { CartComponent } from './cart/cart.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuildurpizzaComponent,
    FooterComponent,
    OrderpizzaComponent,
    CartComponent,
    OrderpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

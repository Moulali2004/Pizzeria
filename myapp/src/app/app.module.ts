import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuildurpizzaComponent } from './components/buildurpizza/buildurpizza.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { OrderpizzaComponent } from './components/orderpizza/orderpizza.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderpageComponent } from './components/orderpage/orderpage.component';

@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        BuildurpizzaComponent,
        FooterComponent,
        OrderpizzaComponent,
        CartComponent,
        OrderpageComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

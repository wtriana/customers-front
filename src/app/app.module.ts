import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersService } from './services/customers.service';


import { APP_ROUTING } from './app.routes';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormCustomerComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

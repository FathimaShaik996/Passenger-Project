import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PassengerDetailsComponent } from '../passenger-details/passenger-details.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    PassengerDetailsComponent,
    PaymentDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

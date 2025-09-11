import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { LoginComponent } from './login/login.component';
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './shared/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    TopbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DownloadComponent,
    DisclosureComponent,
    LoginComponent,
    MutualFundsComponent,
    InsuranceComponent,
    RouterModule,
    OtherProductsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


































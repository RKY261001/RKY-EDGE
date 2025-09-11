import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components import करो
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { LoginComponent } from './login/login.component';

// Products
import { MutualFundsComponent } from './mutual-funds/mutual-funds.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { OtherProductsComponent } from './other-products/other-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },               // Home
  { path: 'about', component: AboutComponent },         // About Us
  { path: 'contact', component: ContactComponent },     // Contact Us
  { path: 'download', component: DownloadComponent },   // Download
  { path: 'disclosure', component: DisclosureComponent }, // Disclosure
  { path: 'login', component: LoginComponent },         // Login

  // Products
  { path: 'mutual-funds', component: MutualFundsComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'other-products', component: OtherProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

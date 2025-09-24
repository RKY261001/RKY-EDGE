import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
   AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    AboutComponent,
    ContactComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

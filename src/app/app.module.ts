import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { UrgenceComponent } from './layout/urgence/urgence.component';
import { RdvComponent } from './layout/rdv/rdv.component';
import { MedsComponent } from './layout/meds/meds.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';
import { Rdv2Component } from './layout/rdv2/rdv2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UrgenceComponent,
    RdvComponent,
    MedsComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    Rdv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

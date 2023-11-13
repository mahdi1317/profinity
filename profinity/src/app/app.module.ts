import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SigninComponent } from './layout/signin/signin.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { ExpertsComponent } from './layout/experts/experts.component';
import { RecruitandpartnerComponent } from './layout/recruitandpartner/recruitandpartner.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { ContactComponent } from './layout/contact/contact.component';
import { HomeComponent } from './layout/home/home.component';
import { SignupComponent } from './layout/signup/signup.component';
import { DetailexpComponent } from './layout/detailexp/detailexp.component';
import { PaymentComponent } from './layout/payment/payment.component';
import { DetailcoursComponent } from './layout/detailcours/detailcours.component';
import { CoursesangComponent } from './layout/coursesang/coursesang.component';
import { QuizComponent } from './layout/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    CoursesComponent,
    ExpertsComponent,
    RecruitandpartnerComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent,
    SignupComponent,
    DetailexpComponent,
    PaymentComponent,
    DetailcoursComponent,
    CoursesangComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

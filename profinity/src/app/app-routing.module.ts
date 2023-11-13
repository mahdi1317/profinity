import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { ExpertsComponent } from './layout/experts/experts.component';
import { RecruitandpartnerComponent } from './layout/recruitandpartner/recruitandpartner.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { ContactComponent } from './layout/contact/contact.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';
import { DetailexpComponent } from './layout/detailexp/detailexp.component';
import { PaymentComponent } from './layout/payment/payment.component';
import { DetailcoursComponent } from './layout/detailcours/detailcours.component';
import { CoursesangComponent } from './layout/coursesang/coursesang.component';
import { QuizComponent } from './layout/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  {
    component:HomeComponent,
    path:'home'
   },
   {
    component:CoursesComponent,
    path:'courses'
   },
   {
    component:ExpertsComponent,
    path:'experts'
   },
   {
    component:ExpertsComponent,
    path:'experts'
   },
   {
    component:RecruitandpartnerComponent,
    path:'rp'
   },
   {
    component:AboutusComponent,
    path:'about'
   },
   {
    component:ContactComponent,
    path:'contact'
   },
   {
    component:SigninComponent,
    path:'sign in'
   },
   {
    component:SignupComponent,
    path:'signup'
   },
   {
    component:DetailexpComponent,
    path:'detailexp'
   },
   {
    component:PaymentComponent,
    path:'payment'
   },
   {
    component:DetailcoursComponent,
    path:'course1'
   },
   {
    component:CoursesangComponent,
    path:'courseang'
   },
   {
    component:QuizComponent,
    path:'quiz'
   },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

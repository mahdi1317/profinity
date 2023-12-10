import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { RdvComponent } from './layout/rdv/rdv.component';
import { MedsComponent } from './layout/meds/meds.component';
import { AboutComponent } from './layout/about/about.component';
import { UrgenceComponent } from './layout/urgence/urgence.component';
import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';

const routes: Routes = [ { path: '', component:HomeComponent }, 
{
  component:HomeComponent,
  path:'home'
 },
 {
  component:UrgenceComponent,
  path:'urgence'
 },
 {
  component:RdvComponent,
  path:'rdv'
 },
 {
  component:MedsComponent,
  path:'meds'
 },
 {
  component:AboutComponent,
  path:'about'
 },
 {
  component:SigninComponent,
  path:'signin'
 },
 {
  component:SignupComponent,
  path:'signup'
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

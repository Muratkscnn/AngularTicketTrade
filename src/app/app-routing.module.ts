import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";

const routes: Routes = [
  {path:"login" , component: LoginComponent},
  {path:"home" , component: HomeComponent},
  {path:"register" , component: SignupComponent},
  {path:"eventDetail" , component: EventDetailComponent},
  {path:"" , redirectTo: "/home" , pathMatch: "full"},
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes) ,
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

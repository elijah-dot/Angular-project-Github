import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayComponent } from './display/display.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'landingpage', component:LandingpageComponent},
  {path:'display', component:DisplayComponent},
  {path:'', component:LandingpageComponent},
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[LandingpageComponent,DisplayComponent]

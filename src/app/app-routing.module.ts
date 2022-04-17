import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:'landingpage', component:LandingpageComponent},
  {path:'display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[LandingpageComponent,DisplayComponent]

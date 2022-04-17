import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DisplayComponent } from './display/display.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes } from '@angular/router';


const routes: Routes = [{ path: '**', component: LandingpageComponent }]

@NgModule({
  declarations: [AppComponent, NavbarComponent, HighlightDirective, DisplayComponent, LandingpageComponent, AboutComponent, ContactComponent, PagenotfoundComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

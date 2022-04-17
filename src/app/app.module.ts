import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DisplayComponent } from './display/display.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HighlightDirective, DisplayComponent, LandingpageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

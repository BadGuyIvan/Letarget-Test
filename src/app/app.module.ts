import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SliderFormComponent } from './slider-form/slider-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AboutKosivComponent } from './about-kosiv/about-kosiv.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SliderComponent,
    SliderFormComponent,
    AboutUsComponent,
    ChooseUsComponent,
    AdvantagesComponent,
    AboutKosivComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { LaptopOhRentMeComponent } from './components/portfolio/portfolio-laptop/laptop-oh-rent-me/laptop-oh-rent-me.component';
import { PortfolioMobileComponent } from './components/portfolio/portfolio-mobile/portfolio-mobile.component';
import { PortfolioLaptopComponent } from './components/portfolio/portfolio-laptop/portfolio-laptop.component';
import { HomeBackgroundComponent } from './components/home/home-background/home-background.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    HeaderComponent,
    LaptopOhRentMeComponent,
    PortfolioMobileComponent,
    PortfolioLaptopComponent,
    HomeBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { MaskedLayerComponent } from './components/home/masked-layer/masked-layer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioDesktopComponent } from './components/portfolio/portfolio-desktop/portfolio-desktop.component';
import { PortfolioDesktopOhRentMeComponent } from './components/portfolio/portfolio-desktop/portfolio-desktop-oh-rent-me/portfolio-desktop-oh-rent-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    MaskedLayerComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    HeaderComponent,
    PortfolioDesktopComponent,
    PortfolioDesktopOhRentMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

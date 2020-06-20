import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { PortfolioMobileComponent } from "./components/portfolio/portfolio-mobile/portfolio-mobile.component";
import { PortfolioLaptopComponent } from "./components/portfolio/portfolio-laptop/portfolio-laptop.component";
import { PortfolioServerComponent } from "./components/portfolio/portfolio-server/portfolio-server.component";
import { ConfirmationEmailComponent } from "./components/contact/confimation-email/confirmation-email.component";
import { LaptopDigipleComponent } from "./components/portfolio/portfolio-laptop/laptop-digiple/laptop-digiple.component";
import { MobileTracketComponent } from "./components/portfolio/portfolio-mobile/mobile-tracket/mobile-tracket.component";
import { HomeLiquidComponent } from "./components/home/home-liquid/home-liquid.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    PortfolioMobileComponent,
    PortfolioLaptopComponent,
    PortfolioServerComponent,
    ConfirmationEmailComponent,
    LaptopDigipleComponent,
    MobileTracketComponent,
    HomeLiquidComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { PortfolioMobileComponent } from "./components/portfolio/portfolio-mobile/portfolio-mobile.component";
import { PortfolioLaptopComponent } from "./components/portfolio/portfolio-laptop/portfolio-laptop.component";
import { PortfolioServerComponent } from "./components/portfolio/portfolio-server/portfolio-server.component";
import { ConfirmationEmailComponent } from "./components/contact/confimation-email/confirmation-email.component";
import { LaptopDigipleComponent } from "./components/portfolio/portfolio-laptop/laptop-digiple/laptop-digiple.component";
import { MobileTracketComponent } from "./components/portfolio/portfolio-mobile/mobile-tracket/mobile-tracket.component";

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    HeaderComponent,
    PortfolioMobileComponent,
    PortfolioLaptopComponent,
    PortfolioServerComponent,
    ConfirmationEmailComponent,
    LaptopDigipleComponent,
    MobileTracketComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

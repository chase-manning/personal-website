import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { MobileComponent } from "./components/services/mobile/mobile.component";
import { LaptopComponent } from "./components/services/laptop/laptop.component";
import { ServerComponent } from "./components/services/server/server.component";
import { ConfirmationEmailComponent } from "./components/contact/confimation-email/confirmation-email.component";
import { LaptopDigipleComponent } from "./components/services/laptop/laptop-digiple/laptop-digiple.component";
import { MobileTracketComponent } from "./components/services/mobile/mobile-tracket/mobile-tracket.component";
import { HomeLiquidComponent } from "./components/home/home-liquid/home-liquid.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CardComponent } from "./components/services/mobile/mobile-tracket/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    MobileComponent,
    LaptopComponent,
    ServerComponent,
    ConfirmationEmailComponent,
    LaptopDigipleComponent,
    MobileTracketComponent,
    HomeLiquidComponent,
    NotFoundComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

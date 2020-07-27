import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ServicesComponent } from "./components/pages/services/services.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { MobileComponent } from "./components/pages/services/mobile/mobile.component";
import { LaptopComponent } from "./components/pages/services/laptop/laptop.component";
import { ServerComponent } from "./components/pages/services/server/server.component";
import { LaptopDigipleComponent } from "./components/pages/services/laptop/laptop-digiple/laptop-digiple.component";
import { MobileTracketComponent } from "./components/pages/services/mobile/mobile-tracket/mobile-tracket.component";
import { HomeLiquidComponent } from "./components/pages/home/home-liquid/home-liquid.component";
import { NotFoundComponent } from "./components/pages/not-found/not-found.component";
import { CardComponent } from "./components/pages/services/mobile/mobile-tracket/card/card.component";
import { TransactionComponent } from "./components/pages/services/mobile/mobile-tracket/transaction/transaction.component";
import { TransactionRowComponent } from "./components/pages/services/mobile/mobile-tracket/transaction/transaction-row/transaction-row.component";
import { GoogleAnalyticsService } from "./services/google-analytics.service";
import { DigiplePortalComponent } from "./components/pages/services/laptop/laptop-digiple/digiple-portal/digiple-portal.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
    MobileComponent,
    LaptopComponent,
    ServerComponent,
    LaptopDigipleComponent,
    MobileTracketComponent,
    HomeLiquidComponent,
    NotFoundComponent,
    CardComponent,
    TransactionComponent,
    TransactionRowComponent,
    DigiplePortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

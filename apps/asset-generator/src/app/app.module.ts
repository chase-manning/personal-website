import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MobileComponent } from "./pages/mobile/mobile.component";
import { LaptopComponent } from "./pages/laptop/laptop.component";
import { ServerComponent } from "./pages/server/server.component";
import { LaptopDigipleComponent } from "./pages/laptop/laptop-digiple/laptop-digiple.component";
import { MobileTracketComponent } from "./pages/mobile/mobile-tracket/mobile-tracket.component";
import { CardComponent } from "./pages/mobile/mobile-tracket/card/card.component";
import { TransactionComponent } from "./pages/mobile/mobile-tracket/transaction/transaction.component";
import { TransactionRowComponent } from "./pages/mobile/mobile-tracket/transaction/transaction-row/transaction-row.component";
import { DigiplePortalComponent } from "./pages/laptop/laptop-digiple/digiple-portal/digiple-portal.component";

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    ServerComponent,
    LaptopDigipleComponent,
    MobileTracketComponent,
    CardComponent,
    TransactionComponent,
    TransactionRowComponent,
    DigiplePortalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

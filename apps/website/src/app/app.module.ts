import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ServicesComponent } from "./components/pages/services/services.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { HomeLiquidComponent } from "./components/pages/home/home-liquid/home-liquid.component";
import { GoogleAnalyticsService } from "./services/google-analytics.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
    HomeLiquidComponent,
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

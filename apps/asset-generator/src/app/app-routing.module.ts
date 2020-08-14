import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobileComponent } from "./pages/mobile/mobile.component";
import { ServerComponent } from "./pages/server/server.component";
import { LaptopComponent } from "./pages/laptop/laptop.component";

const routes: Routes = [
  { path: "", component: MobileComponent },
  { path: "mobile", component: MobileComponent },
  { path: "laptop", component: LaptopComponent },
  { path: "server", component: ServerComponent },
  { path: "**", redirectTo: "/mobile" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

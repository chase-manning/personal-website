import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

/* Home
 * Portfolio/Work/Projects/My Work 17
 * About Me/About/Info 15
 * Contact/Hire Me/Hire Now 14
 * Blog/Articles 9
 * Services/Skills/Offer 5
 * Testimonials 1
 * Resume 1
 */

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

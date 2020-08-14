import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { ServicesComponent } from "./components/pages/services/services.component";
import { PreloadAllModules } from "@angular/router";

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
  {
    path: "contact",
    loadChildren: () =>
      import("./components/pages/contact/contact.module").then(
        (m) => m.ContactModule
      ),
  },
  {
    path: "404",
    loadChildren: () =>
      import("./components/pages/not-found/not-found.module").then(
        (m) => m.NotFoundModule
      ),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

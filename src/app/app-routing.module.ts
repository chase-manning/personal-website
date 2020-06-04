import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoadingComponent } from "./components/loading/loading.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ConfirmationEmailComponent } from "./components/contact/confimation-email/confirmation-email.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
  { path: "confirmationemail", component: ConfirmationEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

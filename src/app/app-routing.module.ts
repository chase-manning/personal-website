import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

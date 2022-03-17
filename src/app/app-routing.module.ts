import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'#welcome', component: WelcomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'services', component: ServicesComponent
  },
  {
    path:'resume', component: ResumeComponent
  },
  {
    path:'works', component: WorksComponent
  },
  {
    path:'testimonials', component: TestimonialsComponent
  },
  {
    path:'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

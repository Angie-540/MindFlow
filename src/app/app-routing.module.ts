import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { MindfulnessComponent } from './pages/mindfulness/mindfulness.component';
import { TherapyComponent } from './pages/therapy/therapy.component';

const routes: Routes = [ 
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Articles",
    component: ArticlesComponent
  },
  {
    path: "Mindfulness",
    component: MindfulnessComponent
  },
  {
    path: "Therapy",
    component: TherapyComponent
  },
  {
    path: "Contact",
    component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

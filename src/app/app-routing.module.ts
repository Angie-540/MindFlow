import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { WellBeingComponent } from './pages/well-being/well-being.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';

const routes: Routes = [ 
  // { 
  //   path: "**",
  //   component: HomeComponent
  // },
  {
    path: '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'well-being',
    component: WellBeingComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { WellBeingComponent } from './pages/well-being/well-being.component';
import { discardPeriodicTasks } from '@angular/core/testing';
const routes: Routes = [ 
  { 
    path: "**",
    component: DiscoverComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'discover',
    component: DiscoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

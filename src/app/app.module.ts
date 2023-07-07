import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { WellBeingComponent } from './pages/well-being/well-being.component';
import { DiscoverComponent } from './pages/discover/discover.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    WellBeingComponent,
    DiscoverComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

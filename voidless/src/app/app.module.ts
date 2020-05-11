import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { DarkHeaderComponent } from './components/header/dark-header/dark-header.component';
import { DarkFooterComponent } from './components/footer/dark-footer/dark-footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkHeaderComponent,
    DarkFooterComponent,
    SubscribeComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

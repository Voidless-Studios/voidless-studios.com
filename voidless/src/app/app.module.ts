import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { DarkHeaderComponent } from './components/header/dark-header/dark-header.component';
import { DarkFooterComponent } from './components/footer/dark-footer/dark-footer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { MediaComponent } from './pages/media/media.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkHeaderComponent,
    DarkFooterComponent,
    SubscribeComponent,

    NotFoundComponent,

    HomeComponent,
    GamesComponent,
    MediaComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

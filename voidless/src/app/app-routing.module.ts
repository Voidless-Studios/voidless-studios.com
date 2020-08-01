import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';
import { MediaComponent } from './pages/media/media.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';

// Error Not found
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'games',
    component: GamesComponent,
    data: {
      title: 'Games'
    }
  },
  {
    path: 'media',
    component: MediaComponent,
    data: {
      title: 'Media'
    }
  },
  {
    path: 'team',
    component: TeamComponent,
    data: {
      title: 'Team'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Page not found!'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

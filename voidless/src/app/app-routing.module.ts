import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';

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
    component: HomeComponent,
    data: {
      title: 'Games'
    }
  },
  {
    path: 'media',
    component: HomeComponent,
    data: {
      title: 'Media'
    }
  },
  {
    path: 'team',
    component: HomeComponent,
    data: {
      title: 'Team'
    }
  },
  {
    path: 'contact',
    component: HomeComponent,
    data: {
      title: 'Contact'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

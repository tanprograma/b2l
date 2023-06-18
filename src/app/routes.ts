import { Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AddBiltilComponent } from './components/add-biltil/add-biltil.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'biltils/create', component: AddBiltilComponent },
];

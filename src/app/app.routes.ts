import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { GuidedSetupComponent } from './core/pages/guided-setup/guided-setup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'guided-setup',
    component: GuidedSetupComponent,
  },
];

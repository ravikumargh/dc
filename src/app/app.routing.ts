import { Routes } from '@angular/router';
import { CircularComponent } from './layouts/circular/circular.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      } 
    ]
  },
  {
    path: '',
    component: CircularComponent,
    children: [
      {
        path: 'circular',
        loadChildren: () => import('./circular/circular.module').then(m => m.CircularModule)
      }
    ]
  }
];

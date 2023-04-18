import { Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';

import { DashboardComponent } from './dashboard.component';

 

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'apps',
        component: ApplicationsComponent,
      } 
    ]
  },
  {
    path: 'apps',
    component: ApplicationsComponent,
  } 
];
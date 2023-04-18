import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

import { TestComponent } from './test/test.component';

export const CircularRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  } 
];

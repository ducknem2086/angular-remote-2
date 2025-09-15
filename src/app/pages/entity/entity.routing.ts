import { Routes } from '@angular/router';
import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { EntityComponent } from './entity.component';

export const ENTITY_ROUTE: Routes = [
  {
    path: '',
    component: EntityComponent,
    children: [
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: 'page2',
        component: Page2Component
      },
      {
        path: 'page3',
        component: Page3Component,
      },
    ],
  },
];

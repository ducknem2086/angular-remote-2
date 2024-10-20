import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren:()=>import('./pages/entity/entity.routing').then(r=>r.ENTITY_ROUTE),
    },
];

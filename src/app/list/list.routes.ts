/* tslint:disable: variable-name */
import { Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { SingleListComponent } from './single-list/single-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: ':id',
    component: SingleListComponent,
  }
];

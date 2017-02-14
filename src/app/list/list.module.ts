import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { routes } from './list.routes';
import { SingleListComponent } from './single-list/single-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent, SingleListComponent]
})
export class ListModule {}

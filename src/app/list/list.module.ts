import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { routes } from './list.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListComponent]
})
export class ListModule {}

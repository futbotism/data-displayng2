import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShipHttpServiceMock } from './services/ship.http.service.mock';
import { ShipsHttpServiceMock } from './services/ships.http.service.mock';
import { ShipService } from './services/ship.service';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterPanelComponent,
    FilterPipe,
    SearchPipe,
    SortPipe
  ],
  exports: [
    FilterPanelComponent,
    FilterPipe,
    FormsModule,
    SearchPipe,
    SortPipe,
  ],
  providers: [
    ShipHttpServiceMock,
    ShipsHttpServiceMock,
    ShipService
  ]

})
export class SharedModule { }

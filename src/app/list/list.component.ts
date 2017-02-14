import { Component, OnInit } from '@angular/core';
import { ShipService } from '../shared/services/ship.service';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/store';
import { Ship } from '../shared/models/ship.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ships: Observable<Ship[]>;
  searchQuery: string;
  filterQuery: Object;
  sortQuery: string;

  constructor(
    private shipService: ShipService,
    private store: Store<AppState>
  ) {
    this.ships = this.shipService.getShipsData();
  }

  ngOnInit() {
    this.sortQuery = 'name';
  }

  setSort(s) {
    this.sortQuery = s;
  }

  setSearch(s: Object){
    this.searchQuery = s['searchQuery'];
  }

  setFilter(f: Object){ 
    this.filterQuery = f;
  }

}

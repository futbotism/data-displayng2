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
  constructor(
    private shipService: ShipService,
    private store: Store<AppState>
  ) {
    this.ships = this.shipService.getShipData();
  }

  ngOnInit() {
  }

}

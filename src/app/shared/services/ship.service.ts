import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../store/';
import { Store } from '@ngrx/store';
import { ShipsHttpServiceMock } from './ships.http.service.mock';
import { ShipHttpServiceMock } from './ship.http.service.mock';
import 'rxjs/add/operator/map';

@Injectable()
export class ShipService {

    constructor(
        private store: Store<AppState>,
        private shipsHttpServiceMock: ShipsHttpServiceMock,
        private shipHttpServiceMock: ShipHttpServiceMock,
    ) {
    }

    getShipsData() {
        return this.shipsHttpServiceMock.get().map(data => {
            return data.json();
        });
    }

    getShipByIdData(id) {
        return this.shipHttpServiceMock.get(id).map(data => {
            return data.json();
        });
    }
}

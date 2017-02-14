import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { mockShipData } from './ship.mock-data';

export class ShipsHttpServiceMock {
  get() {
    let response = new ResponseOptions({
      body: JSON.stringify(mockShipData)
    });
    return Observable.of(new Response(response));
  }
}
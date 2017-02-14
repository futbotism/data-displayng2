import { Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { mockShipData } from './ship.mock-data';

export class ShipHttpServiceMock {
  get(id) {
    let response = new ResponseOptions({
      body: JSON.stringify(this.getById(mockShipData.results, id))
    });
    return Observable.of(new Response(response));
  }

  private getById(data: any[], id) {
    return data.filter(
      (e) => {
        return e.id === id;
      }
    );
  }

};

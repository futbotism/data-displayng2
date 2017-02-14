import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from '../models/ship.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ships: Ship[], args?: any): any {

    if (typeof args === 'undefined') {
      return ships;
    }

    if (!args.critical && !args.warning && !args.ok) {
      return ships;
    }



    return ships.filter((e) => {

      // debugger;
      let s = parseInt(e.company_check_severity.charAt(0));

      if (args.ok && args.warning && args.critical) {
        return s <= 10;
      }

      if (args.ok && args.warning) {
        return s <= 7;
      }

      if (args.ok && args.critical) {
        return s <= 6 || s >= 8;
      }

      if (args.warning && args.critical) {
        return s > 6;
      }

      if (args.ok) {
        return s <= 6;
      } else if (args.warning) {
        return s === 7;
      } else if (args.critical) {
        return s >= 8;
      }

    });
  }

}

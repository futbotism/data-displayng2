import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from '../models/ship.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ships: Ship[], args?: any): any {
    // debugger;
    return ships.sort((a, b) => {
      if (a[args] < b[args]) return -1;
      if (a[args] > b[args]) return 1;
      return 0;
    });
  }

}

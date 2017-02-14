import { Pipe, PipeTransform } from '@angular/core';
import { Ship } from '../models/ship.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(ships: Ship[], args?: string): any {

    if (args === '' || typeof args === 'undefined') {
      return ships;
    }

    return ships.filter((e) => {
      return e.name.toLowerCase().includes(args.toLowerCase());
    });
  }

}

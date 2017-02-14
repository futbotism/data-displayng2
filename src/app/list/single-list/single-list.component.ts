import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShipService } from '../../shared/services/ship.service';
import { Ship } from '../../shared/models/ship.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.sass']
})
export class SingleListComponent implements OnInit {
  ship: Observable<Ship>;
  constructor(
    private shipService: ShipService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.ship = this.shipService.getShipByIdData(params['id']);
    });

  }

}

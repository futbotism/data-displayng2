import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store';
import { Result } from '../../models/result.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.sass']
})
export class ResultListComponent implements OnInit {
  results$;

  constructor(
    private _store: Store<AppState>
  ) {
    this.results$ = _store.select<Observable<Result[]>>('results');
  }

  ngOnInit() {
  }

}

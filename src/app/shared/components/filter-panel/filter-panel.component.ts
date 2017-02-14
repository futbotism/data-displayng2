import { Component, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.sass']
})
export class FilterPanelComponent implements AfterViewInit {
  @Output() $searchChanged = new EventEmitter();
  @Output() $filterChanged = new EventEmitter();
  @ViewChild('filterForm') filterForm;
  @ViewChild('searchForm') searchForm;
  critical: boolean = false;
  ok: boolean = false;
  warning: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.filterForm.control.valueChanges
      .subscribe(values => this.$filterChanged.emit(values));

    this.searchForm.control.valueChanges
      .subscribe(values => this.$searchChanged.emit(values));
  }
}

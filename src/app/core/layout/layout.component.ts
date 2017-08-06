import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as layoutActions from './actions';
import * as fromLayout from './reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @Input() sidenavItems;
  @Input('mode') _mode;
  get mode() {
    return this._mode ? this._mode : 'push';
  }
  sidenavOpened$: Observable<boolean>;
  loadingBar$: Observable<boolean>;

  constructor(
    private _store: Store<fromLayout.State>
  ) {
    this.sidenavOpened$ = _store.select(fromLayout.getSidenavState);
    this.loadingBar$ = _store.select(fromLayout.getLoadingBarState);
  }

  openSidenav() {
    this._store.dispatch(new layoutActions.SidenavOpenAction());
  }

  closeSidenav() {
    this._store.dispatch(new layoutActions.SidenavCloseAction());
  }

}

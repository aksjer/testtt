import * as fromRoot from '../../../reducers';
import * as fromLayout from '../actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  sidenavOpened: boolean;
  loadingBar: boolean;
}

const initialState: State = {
  sidenavOpened: false,
  loadingBar: false
};

export const reducer = (state: State = initialState, action: fromLayout.Actions): State => {
  switch (action.type) {
    case fromLayout.SIDENAV_OPEN:
      return { ...state, sidenavOpened: true };
    case fromLayout.SIDENAV_CLOSE:
      return { ...state, sidenavOpened: false };
    case fromLayout.LOADINGBAR_ON:
      return { ...state, loadingBar: true };
    case fromLayout.LOADINGBAR_OFF:
      return { ...state, loadingBar: false };
    default:
      return state;
  }
};

export const getLayoutState = createFeatureSelector<State>('layout');
export const getSidenavState = createSelector(getLayoutState, s => s.sidenavOpened);
export const getLoadingBarState = createSelector(getLayoutState, s => s.loadingBar);

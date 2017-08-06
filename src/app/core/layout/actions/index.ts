import { Action } from '@ngrx/store';

export const SIDENAV_OPEN = '[Sidenav] Open';
export const SIDENAV_CLOSE = '[Sidenav] Close';
export const LOADINGBAR_ON = '[LoadingBar] On';
export const LOADINGBAR_OFF = '[LoadingBar] Off';


export class SidenavOpenAction implements Action {
  readonly type = SIDENAV_OPEN;
}

export class SidenavCloseAction implements Action {
  readonly type = SIDENAV_CLOSE;
}

export class LoadingBarOnAction implements Action {
  readonly type = LOADINGBAR_ON;
}

export class LoadingBarOffAction implements Action {
  readonly type = LOADINGBAR_OFF;
}

export type Actions = SidenavOpenAction
  | SidenavCloseAction
  | LoadingBarOnAction
  | LoadingBarOffAction;

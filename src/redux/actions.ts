import { ThunkAction } from 'redux-thunk';

import { AppMenuActionTypes } from '../components/app-menu/app-menu.actions';

import { GlobalStoreState } from './store';

export type ReduxAction<T> = ThunkAction<Promise<T>, GlobalStoreState, void>;

export type GlobalActionTypes =
  | AppMenuActionTypes
  ;

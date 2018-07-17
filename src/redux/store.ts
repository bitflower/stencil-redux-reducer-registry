import Debug from 'debug';
const debug: Debug.IDebugger = Debug('co:redux/store.ts');

import { createStore, Reducer, ReducersMapObject, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// REDUCERS
import {
  AppMenuState,
  getInitialState as getAppMenuInitialState
} from '../components/app-menu/app-menu.reducer';

import { reducerRegistry } from 'redux-reducer-registry/esm/reducer-registry';
import { combine } from 'redux-reducer-registry/esm/combine';

// STORE
export interface GlobalStoreState {
  menu: AppMenuState;
}

export function getInitialState(): GlobalStoreState {
  return {
    menu: getAppMenuInitialState()
  };
}


export let store: Store<GlobalStoreState>;

// TODO: initialState of CaseOS ?
export function configureStore(): Store<GlobalStoreState> {

  // Recreate state
  const globalReducer: Reducer<GlobalStoreState> = combine<GlobalStoreState>(reducerRegistry.getReducers(), getInitialState());

  // Create the Redux store
  store = createStore(
    globalReducer,
    getInitialState(),
    composeWithDevTools());

  reducerRegistry.setChangeListener((reducers: ReducersMapObject) => {
    debug('Store changed!');
    store.replaceReducer(combine<GlobalStoreState>(reducers, getInitialState()));
  });

  return store;
}

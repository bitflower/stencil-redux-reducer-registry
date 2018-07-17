import { reducerRegistry } from 'redux-reducer-registry/esm/reducer-registry';

import {
  AppMenuActions,
  AppMenuActionTypes
} from './app-menu.actions';

export interface AppMenuState {
  visible: boolean;
}

const reducerName: string = 'menu';

export function getInitialState(): AppMenuState {
  return {
    visible: false
  };
}

function reducer(state: AppMenuState = getInitialState(), action: AppMenuActionTypes): AppMenuState {
  switch (action.type) {
    case AppMenuActions.OPEN_MENU: {
      return {
        ...state,
        visible: true
      };
    }

    case AppMenuActions.CLOSE_MENU: {
      return {
        ...state,
        visible: false
      };
    }

    case AppMenuActions.TOGGLE_MENU: {
      return {
        ...state,
        visible: !state.visible
      };
    }

    default:
      return state;
  }
}

reducerRegistry.register(reducerName, reducer);
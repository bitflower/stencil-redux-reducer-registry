// import reducerRegistry from '../../case-os/redux/reducer-registry';

import {
    AppProfileActions,
    AppProfileActionTypes
} from './app-profile.actions';

export interface AppProjectsState {
    loading: boolean;
}

export function getInitialState(): AppProjectsState {
    return {
        loading: false
    };
}

export default function reducer(
    state: AppProjectsState = getInitialState(),
    action: AppProfileActionTypes
): AppProjectsState {
    switch (action.type) {
        case AppProfileActions.START_LOADING: {
            return {
                loading: true
            };
        }

        case AppProfileActions.STOP_LOADING: {
            return {
                loading: false
            };
        }

        default:
            return state;
    }
}

// reducerRegistry.register(reducerName, reducer);
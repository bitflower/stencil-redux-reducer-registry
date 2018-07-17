import { Dispatch } from 'redux';

import { ReduxAction } from '../../redux/actions';
import { GlobalStoreState } from '../../redux/store';

export enum AppProfileActions {
    START_LOADING = 'START_LOADING',
    STOP_LOADING = 'STOP_LOADING'
}

export interface StartLoadingProjectAction {
    type: AppProfileActions.START_LOADING;
}

export function startLoading(): ReduxAction<StartLoadingProjectAction> {
    return async (
        dispatch: Dispatch<GlobalStoreState>
    ): Promise<StartLoadingProjectAction> => {
        return dispatch({
            type: AppProfileActions.START_LOADING as AppProfileActions.START_LOADING
        });
    };
}

export interface StopLoadingProfileAction {
    type: AppProfileActions.STOP_LOADING;
}

export function stopLoading(): ReduxAction<StopLoadingProfileAction> {
    return async (
        dispatch: Dispatch<GlobalStoreState>
    ): Promise<StopLoadingProfileAction> => {
        return dispatch({
            type: AppProfileActions.STOP_LOADING as AppProfileActions.STOP_LOADING
        });
    };
}

export type AppProfileActionTypes =
    | StartLoadingProjectAction
    | StopLoadingProfileAction;

import type {
    Reducer,
    ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
    type IRootState,
    type IStateKey,
} from './types';

export function createReducerManager(initialReducers: DeepPartial<ReducersMapObject<IRootState>>) {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: Array<IStateKey> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state?: IRootState, action?: UnknownAction) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return combinedReducer(state, action);
        },

        add: (key: IStateKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return false;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);

            return true;
        },

        remove: (key: IStateKey) => {
            if (!key || !reducers[key]) {
                return false;
            }

            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);

            return true;
        },
    };
}

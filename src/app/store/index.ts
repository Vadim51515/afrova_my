import {
    configureStore,
    type ReducersMapObject,
} from '@reduxjs/toolkit';

import { createReducerManager } from './createReducerManager';
import {
    type IRootState,
    type IRootStore,
} from './types';

export const createReduxStore = (
    preloadedState?: IRootState,
    asyncReducers?: DeepPartial<ReducersMapObject<IRootState>>,
) => {
    const rootReducers: DeepPartial<ReducersMapObject<IRootState>> = { ...asyncReducers };

    // TODO
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState,
    }) as IRootStore;

    store.reducerManager = reducerManager;

    store.addModule = (key: keyof IRootState, reducer) => {
        if (store.reducerManager.add(key, reducer)) store.replaceReducer(reducerManager.reduce);
    };

    store.removeModule = (key) => {
        if (store.reducerManager.remove(key)) store.replaceReducer(reducerManager.reduce);
    };

    return store;
};

export const store = createReduxStore();

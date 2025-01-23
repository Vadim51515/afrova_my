import {
    configureStore,
    type ReducersMapObject,
} from '@reduxjs/toolkit';

import { createReducerManager } from './createReducerManager';
import { type IRootState } from './types';

export const createReduxStore = (preloadedState?: IRootState,
    asyncReducers?: DeepPartial<ReducersMapObject<IRootState>>) => {
    const rootReducers: ReducersMapObject<IRootState> = { ...asyncReducers };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
};

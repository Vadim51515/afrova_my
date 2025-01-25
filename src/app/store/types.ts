import {
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { type RuntimeStatuses } from '../../common/commonEnums';
import { type Func } from '../../common/commonTypes';

export interface IRootState {
    // TODO
    appInfo: any;
    // user: any;
    // Асинхронные редюсеры
    bots?: any;
    login?: any;
}

export type IStateKey = keyof IRootState;

export type TReducersList = {
    [name in IStateKey]?: Reducer<NonNullable<IRootState[name]>>;
};

export interface ISharedState {
    status: RuntimeStatuses;
    error: string;
}

export interface IReducerManager {
    getReducerMap: Func<[], ReducersMapObject<IRootState>>;
    reduce: Func<[IRootState?, UnknownAction?], IRootState>;
    add: Func<[IStateKey, Reducer]>;
    remove: Func<[IStateKey]>;
}

export interface IReduxStoreWithManager extends EnhancedStore<IRootState> {
    reducerManager: IReducerManager;

    addModule: (key: string, reducer: Reducer, isReplace?: boolean) => void;
    removeModule: (key: string) => void;
}

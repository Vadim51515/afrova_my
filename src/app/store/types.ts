import {
    type Action,
    type AnyAction,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
    type Store,
    type ThunkAction,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { type RuntimeStatuses } from '../../common/commonEnums';
import { type Func } from '../../common/commonTypes';
import { type ILoginState } from '../../pages/Login/redux/types';
import { type createReducerManager } from './createReducerManager';

export interface IRootState {
    // TODO
    appInfo: any;
    // user: any;
    // Асинхронные редюсеры
    bots?: any;
    login: ILoginState;
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

type TCreateReducerManager = ReturnType<typeof createReducerManager>;
export interface IRootStore<S = any, A extends Action = AnyAction> extends Store<S, A> {
    reducerManager: TCreateReducerManager;
    addModule: (key: keyof IRootState, reducer: Reducer, isReplace?: boolean) => void;
    removeModule: (key: keyof IRootState) => void;
}

export type ThunkActionCommon<R = void> = ThunkAction<R, IRootState, void, AnyAction>;

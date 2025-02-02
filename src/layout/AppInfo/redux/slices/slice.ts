import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../common/commonEnums';
import { type IUser } from '../../../../common/commonTypes';
import { lStorage } from '../../../../common/functions/localStorage';
import { type IAppInfoState } from '../types';

export const AppInfoInitialState: IAppInfoState = {
    status: RuntimeStatuses.BeforeInitial,
    error: '',
    userData: lStorage.getJson<IUser>('userData'),
};

export const {
    reducer: appInfoReducer,
    actions: appInfoSliceActions,
} = createSlice({
    name: 'appInfo',
    initialState: AppInfoInitialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<RuntimeStatuses>) {
            state.status = payload;
        },

        setUserData(state, { payload }: PayloadAction<IUser>) {
            state.userData = payload;
        },
    },

});

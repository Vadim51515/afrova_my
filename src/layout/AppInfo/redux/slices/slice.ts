import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../common/commonEnums';
import {
    type IAppInfoState,
    type IAuthData,
} from '../types';

const initialState: IAppInfoState = {
    status: RuntimeStatuses.BeforeInitial,
    error: '',
    authData: null,
};

export const {
    reducer: appInfoReducer,
    actions: appInfoSliceActions,
} = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<RuntimeStatuses>) {
            state.status = payload;
        },

        setAuthData(state, { payload }: PayloadAction<IAuthData>) {
            state.authData = payload;
        },
    },

});

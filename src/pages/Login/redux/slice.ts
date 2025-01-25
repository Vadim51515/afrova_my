import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../common/commonEnums';
import { type ILoginState } from './types';

const initialState: ILoginState = {
    status: RuntimeStatuses.BeforeInitial,
    login: '',
    password: '',
    error: '',
};

export const {
    reducer: loginReducer,
    actions: loginSliceActions,
} = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<RuntimeStatuses>) {
            state.status = payload;
        },

        setLogin(state, { payload }: PayloadAction<string>) {
            state.login = payload;
        },

        setPassword(state, { payload }: PayloadAction<string>) {
            state.password = payload;
        },
    },

});

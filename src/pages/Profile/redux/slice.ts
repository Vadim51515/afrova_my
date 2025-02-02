import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../common/commonEnums';
import { type IUser } from '../../../common/commonTypes';
import { type IProfileState } from './types';

const initialState: IProfileState = {
    status: RuntimeStatuses.BeforeInitial,
    error: '',
    formErrors: {},
};

export const {
    reducer: profileReducer,
    actions: profileSliceActions,
} = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<RuntimeStatuses>) {
            state.status = payload;
        },

        setError(state, { payload }: PayloadAction<string>) {
            state.error = payload;
        },

        setProfileData(state, { payload }: PayloadAction<IUser>) {
            Object.assign(state, payload);
        },
    },
});

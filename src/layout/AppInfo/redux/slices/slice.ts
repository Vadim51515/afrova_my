import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '@/common/commonEnums';

const initialState = { status: RuntimeStatuses.BeforeInitial };

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

        setStatusTest(state, { payload }: PayloadAction<RuntimeStatuses>) {
            state.status = payload;
        },
    },

});

import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import { RuntimeStatuses } from '../../../../commonEnums';

const initialState = { status: RuntimeStatuses.BeforeInitial };

export const {
    reducer: bootsReducer,
    actions: bootsSliceActions,
} = createSlice({
    name: 'boots',
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

import {
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import {
    FormStatuses,
    RuntimeStatuses,
} from '../../../common/commonEnums';
import { type IUser } from '../../../common/commonTypes';
import { type IProfileState } from './types';

const initialState: IProfileState = {
    status: RuntimeStatuses.BeforeInitial,
    error: '',
    formErrors: {},
    userData: {},
    form: {},
    formStatus: FormStatuses.Read,
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

        setUserData(state, { payload }: PayloadAction<IUser>) {
            state.userData = payload;
        },

        setFormData(state, { payload }: PayloadAction<IUser>) {
            state.form = payload;
        },

        updateFormData(state, { payload }: PayloadAction<Partial<IUser>>) {
            Object.assign(state.form, payload);
        },

        updateFormStatus(state, { payload }: PayloadAction<FormStatuses>) {
            state.formStatus = payload;
        },

        setAllUserData(state, { payload }: PayloadAction<IUser>) {
            state.userData = payload;
            state.form = payload;
        },
    },
});

import { type AxiosError } from 'axios';

import { type ThunkActionCommon } from '../../../app/store/types';
import { API_CONTROLLER } from '../../../common/apiController';
import {
    FormStatuses,
    RuntimeStatuses,
} from '../../../common/commonEnums';
import {
    type IUser,
    type TNumStr,
} from '../../../common/commonTypes';
import { ENDPOINTS } from './endpoints';
import {
    profileFormSelector,
    profileUserDataSelector,
} from './selectors';
import { profileSliceActions } from './slice';

const {
    setAllUserData,
    setError,
    setStatus,
    updateFormData,
    updateFormStatus,
} = profileSliceActions;

const getProfileData = (): ThunkActionCommon => (dispatch) => {
    dispatch(setStatus(RuntimeStatuses.Loading));

    API_CONTROLLER.get<IUser>(ENDPOINTS.profile(1)).then((response) => {
        const data = response.data;

        dispatch(setAllUserData(data));
        dispatch(setStatus(RuntimeStatuses.Ready));
    }).catch((errorResponse: AxiosError<{ message: string }>) => {
        dispatch(setError(errorResponse.response?.data.message as string));
    });
};

const updateFormValue = (key: keyof IUser, newValue: TNumStr): ThunkActionCommon => (dispatch) => {
    dispatch(updateFormData({ [key]: newValue }));
};

export const editForm = (): ThunkActionCommon => (dispatch, getState) => {
    const userData = profileUserDataSelector(getState());

    dispatch(updateFormData(userData));
    dispatch(updateFormStatus(FormStatuses.Edit));
};

export const cancelEditForm = (): ThunkActionCommon => (dispatch, getState) => {
    const userData = profileUserDataSelector(getState());

    dispatch(updateFormData(userData));
    dispatch(updateFormStatus(FormStatuses.Read));
};

export const saveForm = (): ThunkActionCommon => (dispatch, getState) => {
    const profileForm = profileFormSelector(getState());

    API_CONTROLLER.put<IUser, Partial<IUser>>(ENDPOINTS.profile(1), profileForm).then((response) => {
        const data = response.data;

        dispatch(setAllUserData(data));
        dispatch(setStatus(RuntimeStatuses.Ready));
    }).catch((errorResponse: AxiosError<{ message: string }>) => {
        dispatch(setError(errorResponse.response?.data.message as string));
    });
};

export const profileActions = {
    getProfileData,
    updateFormValue,
    editForm,
    cancelEditForm,
    saveForm,
};

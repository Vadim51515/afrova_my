import { type AxiosError } from 'axios';

import { type ThunkActionCommon } from '../../../app/store/types';
import { API_CONTROLLER } from '../../../common/apiController';
import { RuntimeStatuses } from '../../../common/commonEnums';
import { type IUser } from '../../../common/commonTypes';
import { ENDPOINTS } from './endpoints';
import { profileSliceActions } from './slice';

const {
    setAllUserData,
    setError,
    setStatus,
    updateFormData,
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

const updateFormValue = (key: keyof IUser, newValue: string): ThunkActionCommon => (dispatch) => {
    dispatch(updateFormData({ [key]: newValue }));
};

export const profileActions = {
    getProfileData,
    updateFormValue,
};

import { type AxiosError } from 'axios';

import { type ThunkActionCommon } from '../../../app/store/types';
import { API_CONTROLLER } from '../../../common/apiController';
import { type IUser } from '../../../common/commonTypes';
import { ENDPOINTS } from './endpoints';
import { profileSliceActions } from './slice';

const {
    setProfileData,
    setError,
} = profileSliceActions;

const getProfileData = (): ThunkActionCommon => (dispatch) => {
    API_CONTROLLER.get<IUser>(ENDPOINTS.profile(1)).then((response) => {
        const data = response.data;
        console.log('data', data);

        dispatch(setProfileData(data));
    }).catch((errorResponse: AxiosError<{ message: string }>) => {
        dispatch(setError(errorResponse.response?.data.message ?? ''));
    });
};

export const profileActions = { getProfileData };

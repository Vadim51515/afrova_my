import { type AxiosError } from 'axios';

import { type ThunkActionCommon } from '../../../app/store/types';
import { API_CONTROLLER } from '../../../common/apiController';
import { type IUser } from '../../../common/commonTypes';
import { lStorage } from '../../../common/functions/localStorage';
import { appInfoSliceActions } from '../../../layout/AppInfo/redux/slices/slice';
import { ENDPOINTS } from './endpoints';
import {
    loginSelector,
    passwordSelector,
} from './selectors';
import { loginSliceActions } from './slice';
import { type ILoginPostData } from './types';

const {
    setLogin,
    setPassword,
    setStatus,
    setError,
    addFormError,
} = loginSliceActions;

const { setAuthData } = appInfoSliceActions;

const login = (): ThunkActionCommon => (dispatch, getState) => {
    const login = loginSelector(getState());
    const password = passwordSelector(getState());

    if (!login || !password) {
        if (!login) dispatch(addFormError({ login: 'Поле "Логин" не может быть пустым' }));
        if (!password) dispatch(addFormError({ password: 'Поле "Пароль" не может быть пустым' }));

        return;
    };

    API_CONTROLLER.post<IUser, ILoginPostData>(ENDPOINTS.login, {
        login,
        password,
    }).then((response) => {
        const data = response.data;

        lStorage.setJson('authData', data);
        dispatch(setAuthData(data));
    }).catch((errorResponse: AxiosError<{ message: string }>) => {
        dispatch(setError(errorResponse.response?.data.message ?? ''));
    });
};

export const loginActions = {
    setLogin,
    setPassword,
    setStatus,
    login,
};

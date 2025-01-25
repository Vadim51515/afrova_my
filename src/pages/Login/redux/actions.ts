import { type ThunkActionCommon } from '../../../app/store/types';
import { API_CONTROLLER } from '../../../common/apiController';
import { ENDPOINTS } from './endpoints';
import { loginSliceActions } from './slice';

const {
    setLogin,
    setPassword,
    setStatus,
} = loginSliceActions;

const login = (prevTerm?: string): ThunkActionCommon => (dispatch, getState) => {
    API_CONTROLLER.post(ENDPOINTS.login, { login: 'test' });
};

export const loginActions = {
    setLogin,
    setPassword,
    setStatus,
    login,
};

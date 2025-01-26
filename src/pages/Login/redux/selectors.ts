import { type IRootState } from '../../../app/store/types';

export const errorSelector = (state: IRootState) => state.login.error;
export const loginSelector = (state: IRootState) => state.login.login;
export const passwordSelector = (state: IRootState) => state.login.password;
export const getFormError = (state: IRootState, key: string) => state.login.formErrors[key];

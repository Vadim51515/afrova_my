import { type IRootState } from '../../../app/store/types';

export const loginSelector = (state: IRootState) => state.login.login;

import { type IRootState } from '../../../app/store/types';

export const isLoginAppInfoSelector = (state: IRootState) => !!state.appInfo.userData;
export const userNameAppInfoSelector = (state: IRootState) => state.appInfo.userData?.name;

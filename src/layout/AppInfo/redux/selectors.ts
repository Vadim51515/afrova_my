import { type IRootState } from '../../../app/store/types';

export const isLoginAppInfoSelector = (state: IRootState) => state.appInfo?.isLogin ?? false;

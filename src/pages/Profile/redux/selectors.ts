import { type IRootState } from '../../../app/store/types';
import { RuntimeStatuses } from '../../../common/commonEnums';
import { type IUser } from '../../../common/commonTypes';

export const avatarProfileSelector = (state: IRootState) => state.profile.userData?.avatar;
export const isLoadingSelector = (state: IRootState) => state.profile.status === RuntimeStatuses.Loading;
export const profileFormValue = (state: IRootState, key: keyof IUser) => state.profile.form?.[key];

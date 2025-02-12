import { type IRootState } from '../../../app/store/types';
import { RuntimeStatuses } from '../../../common/commonEnums';
import { type IUser } from '../../../common/commonTypes';

export const avatarProfileSelector = (state: IRootState) => state.profile.userData?.avatar;
export const isLoadingSelector = (state: IRootState) => state.profile.status === RuntimeStatuses.Loading;
export const profileFormValueSelector = (state: IRootState, key: keyof IUser) => state.profile.form?.[key];

export const profileTitleSelector = (state: IRootState) => (
    state.profile.userData.firstName + ' ' + state.profile.userData.middleName
);

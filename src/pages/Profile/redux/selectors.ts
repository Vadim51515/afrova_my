import { type IRootState } from '../../../app/store/types';
import { RuntimeStatuses } from '../../../common/commonEnums';

export const avatarProfileSelector = (state: IRootState) => state.profile.avatar;
export const isLoadingSelector = (state: IRootState) => state.profile.status === RuntimeStatuses.Loading;

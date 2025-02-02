import { type IRootState } from '../../../app/store/types';

export const avatarProfileSelector = (state: IRootState) => state.profile.avatar;

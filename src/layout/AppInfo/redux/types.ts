import type { ISharedState } from '../../../app/store/types';
import { type Nullable } from '../../../common/commonTypes';

export interface IAppInfoState extends ISharedState {
    authData: Nullable<IAuthData>;
}

export interface IAuthData {
    login: string;
    password: string;
}

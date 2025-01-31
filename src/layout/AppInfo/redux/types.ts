import type { ISharedState } from '../../../app/store/types';
import {
    type IUser,
    type Nullable,
} from '../../../common/commonTypes';

export interface IAppInfoState extends ISharedState {
    userData: Nullable<IUser>;
}

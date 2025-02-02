import { type ISharedState } from '../../../app/store/types';
import {
    type IUser,
    type TFormErrors,
} from '../../../common/commonTypes';

export interface IProfileState extends ISharedState, IUser {
    formErrors: TFormErrors;
}

import { type ISharedState } from '../../../app/store/types';
import { type FormStatuses } from '../../../common/commonEnums';
import {
    type IUser,
    type TFormErrors,
} from '../../../common/commonTypes';

export interface IProfileState extends ISharedState {
    formErrors: TFormErrors;
    userData: Partial<IUser>;
    form: Partial<IUser>;
    formStatus: FormStatuses;
}

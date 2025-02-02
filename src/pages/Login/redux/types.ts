import { type ISharedState } from '../../../app/store/types';
import { type TFormErrors } from '../../../common/commonTypes';

export interface ILoginState extends ISharedState {
    login: string;
    password: string;
    formErrors: TFormErrors;
}

export interface IAuthLoginData {
    login: string;
    password: string;
}

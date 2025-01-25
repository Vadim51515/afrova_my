import { type ISharedState } from '../../../app/store/types';

export interface ILoginState extends ISharedState {
    login: string;
    password: string;
}

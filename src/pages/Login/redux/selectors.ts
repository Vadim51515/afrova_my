import { type IRootState } from '../../../app/store/types';

export const loginSelector = (state: IRootState) => {
    console.log('loginSelector state', state);

    return state?.login?.login;
};

import { type TReducersList } from '../../../../app/store/types';
import { type CFC } from '../../../../common/commonTypes';
import { useAsyncReducer } from '../../../../common/hooks/useAsyncReducer';
import { appInfoReducer } from './slice';

const reducers: TReducersList = { appInfo: appInfoReducer };

export const AppInfo: CFC = ({ children }) => {
    useAsyncReducer(reducers, true);

    return children;
};

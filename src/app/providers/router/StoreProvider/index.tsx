import { Provider } from 'react-redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';

import { type CFC } from '../../../../common/commonTypes';
import { store } from '../../../store';
import { type IRootState } from '../../../store/types';

interface IStoreProvider {
    initialState?: DeepPartial<IRootState>;
    asyncReducers?: DeepPartial<ReducersMapObject<IRootState>>;
}

export const StoreProvider: CFC<IStoreProvider> = ({ children }) => <Provider store={store}>{children}</Provider>;

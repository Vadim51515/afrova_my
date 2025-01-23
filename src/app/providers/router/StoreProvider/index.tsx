import { Provider } from 'react-redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';

import { type CFC } from '../../../../common/commonTypes';
import { createReduxStore } from '../../../store';
import { type IRootState } from '../../../store/types';

interface IStoreProvider {
    initialState?: DeepPartial<IRootState>;
    asyncReducers?: DeepPartial<ReducersMapObject<IRootState>>;
}

export const StoreProvider: CFC<IStoreProvider> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const store = createReduxStore(initialState as IRootState, asyncReducers);

    return <Provider store={store}>{children}</Provider>;
};

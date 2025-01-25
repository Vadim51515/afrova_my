import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
    type ActionCreatorsMapObject,
    bindActionCreators,
} from '@reduxjs/toolkit';

import { type TUseActions } from './types';

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch();

    return useMemo<TUseActions<T>>(() => bindActionCreators<unknown, T>(actions, dispatch), [dispatch]);
};

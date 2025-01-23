import {
    shallowEqual,
    useSelector,
} from 'react-redux';

export const useParamSelector = <TArgs extends Array<unknown>, TValue, TState>(
    parametrizesSelector: (state: TState, ...params: TArgs) => TValue,
    ...selectorParams: TArgs
): TValue => useSelector((state: TState) => parametrizesSelector(state, ...selectorParams), shallowEqual);

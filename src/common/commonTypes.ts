import {
    type FC,
    type PropsWithChildren,
} from 'react';

export type Func<Args extends Array<unknown> = Array<never>, Return = void> = (...args: Args) => Return;

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;

export type Nullable<T> = (null | T);

export interface IOption {
    label: string;
    value: string;
}

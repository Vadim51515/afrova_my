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

export type TOptions = Array<IOption>;

export interface IUser {
    id: number;
    name: string;
    age: number;
    login: string;
    password: string;
}

export type TFormErrors = Record<string, string>;

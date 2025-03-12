import { type FC } from 'react';

export type TWithEntry = <T extends JSX.IntrinsicAttributes>() => (
    ComponentLazy: FC<T>) => FC<T>;

export interface IWithMode<T> {
    View: React.ComponentType<T & IWithModeProps>;
    Edit: React.ComponentType<T & IWithModeProps>;
}

export interface IWithModeProps {
    isReadonly?: boolean;
}

import { type FC } from 'react';

export type TWithEntry = <T extends JSX.IntrinsicAttributes>() => (
    ComponentLazy: FC<T>) => FC<T>;

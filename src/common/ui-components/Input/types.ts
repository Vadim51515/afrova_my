import { type ChangeEvent } from 'react';

import { type Func } from '../../commonTypes';
import { type ISharedFieldComponentProps } from '../types';

// TODO - Убрать если так и не понадобится
// type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> &
// ISharedFieldComponentProps & IFieldLabelProps & {
//     size?: TInputSize;
//     isFullWidth?: boolean;
// };

type BaseInputProps = ISharedFieldComponentProps & {
    value: string | number | undefined;
};

export type InputPropsWithEvent = BaseInputProps & {
    withEventChange: true;
    onChange: Func<[ChangeEvent<HTMLInputElement>]>;
};

export type InputPropsWithString = BaseInputProps & {
    withEventChange?: false;
    onChange: Func<[string]>;
};

export type IInputProps = InputPropsWithEvent | InputPropsWithString;

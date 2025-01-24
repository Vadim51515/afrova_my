import {
    type ChangeEvent,
    type InputHTMLAttributes,
} from 'react';

import { type Func } from '../../commonTypes';
import { type IFieldLabelProps } from '../FieldLabel/types';
import { type ISharedFieldComponentProps } from '../types';

type TInputSize = 'sm' | 'md' | 'lg' | 'xl' | 'sizeContent';

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> &
ISharedFieldComponentProps & IFieldLabelProps & {
    size?: TInputSize;
    isFullWidth?: boolean;
};

export type InputPropsWithEvent = BaseInputProps & {
    withEventChange: true;
    onChange: Func<[ChangeEvent<HTMLInputElement>]>;
};

type InputPropsWithString = BaseInputProps & {
    withEventChange?: false;
    onChange: Func<[string]>;
};

export type IInputProps = InputPropsWithEvent | InputPropsWithString;

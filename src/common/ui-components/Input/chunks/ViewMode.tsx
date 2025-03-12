import { type FC } from 'react';

import { ReadonlyValue } from '../../ReadonlyValue';
import { type IInputProps } from '../types';

export const ViewMode: FC<IInputProps> = ({ value = '' }) => (
    <ReadonlyValue value={value} />
);

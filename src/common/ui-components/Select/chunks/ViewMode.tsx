import { type FC } from 'react';

import { ReadonlyValue } from '../../ReadonlyValue';
import { type ISelectProps } from '../types';

export const ViewMode: FC<ISelectProps> = ({
    value = '',
    options,
}) => {
    const currentOption = options.find((option) => option.value === value);

    console.log('currentOption', currentOption);

    return (
        <ReadonlyValue value={currentOption?.label} />
    );
};

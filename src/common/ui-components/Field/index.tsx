import {
    type FC,
    memo,
} from 'react';

import { FieldLabel } from '../FieldLabel';
import { Input } from '../Input/Input'; // TODO импорт кривой
import { Select } from '../Select';
import { type IInputProps } from '../Input/types';
import { type ISelectProps } from '../Select/types';
import { type TFieldProps } from './types';
import styles from './styles.module.scss';

export const Field: FC<TFieldProps> = memo(({
    fieldType,
    label,
    isRequired,
    ...otherProps
}) => {
    console.log(styles);

    let Component;

    switch (fieldType) {
        case 'input':
            Component = <Input {...otherProps as IInputProps} />;
            break;
        case 'select':
            Component = <Select {...otherProps as ISelectProps} />;
            break;
        default:
            Component = <Input {...otherProps as IInputProps} />;
    }

    return (
        <div>
            <FieldLabel
                isRequired={isRequired}
                label={label}
            />

            {Component}
        </div>
    );
});

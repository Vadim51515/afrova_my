import {
    type FC,
    memo,
} from 'react';

import { FieldLabel } from '../FieldLabel';
import { Input } from '../Input/Input'; // TODO импорт кривой
import { Select } from '../Select';
import { type TFieldProps } from './types';
import styles from './styles.module.scss';

export const Field: FC<TFieldProps> = memo(({
    fieldName,
    fieldType,
    label,
    isRequired,
    ...otherProps
}) => {
    console.log(styles);

    let Component;

    switch (fieldType) {
        case 'input':
            Component = Input;
            break;
        case 'select':
            Component = Select;
            break;
        default:
            Component = Input;
    }

    return (
        <div>
            <FieldLabel
                isRequired={isRequired}
                label={label}
            />

            {<Component {...otherProps} />}
        </div>
    );
});

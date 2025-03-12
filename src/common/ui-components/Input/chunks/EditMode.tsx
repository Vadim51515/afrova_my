import {
    type ChangeEvent,
    type FC,
} from 'react';
import classNames from 'classnames';

import styles from '../styles.module.scss';
import { type IInputProps } from '../types';

export const EditMode: FC<IInputProps> = ({
    mix,
    withEventChange,
    onChange,
    dataTestId,
    value = '',
    hasError,
    ...props
}) => {
    const mods = { [styles.error]: hasError };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (withEventChange) onChange(event);
        else onChange(event.target.value);
    };

    return (
        <input
            className={classNames(styles.input, mods, [mix])}
            data-testid={`${dataTestId}Input`}
            onChange={onChangeInput}
            type="text"
            value={value}
            {...props}
        />
    );
};

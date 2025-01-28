import {
    type ChangeEvent,
    type FC,
} from 'react';
import classNames from 'classnames';

import { type IInputProps } from './types';
import styles from './styles.module.scss';

export const Input: FC<IInputProps> = ({
    mix,
    size = 'md',
    isFullWidth,
    withEventChange,
    onChange,
    dataTestId,
    value = '',
    hasError,
    ...props
}) => {
    console.log('hasError', hasError);

    const mods = {
        [styles.fullWidth]: isFullWidth,
        [styles.error]: hasError,
        [styles[size]]: size,
    };

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

import {
    type ChangeEvent,
    type FC,
} from 'react';
import classNames from 'classnames';

import { type IInputProps } from './types';
import styles from './styles.module.scss';

export const Input: FC<IInputProps> = ({
    mix,
    size = 'sizeContent',
    isFullWidth,
    withEventChange,
    onChange,
    dataTestId,
    value = '',
    label,
    isRequired,
    ...props
}) => {
    const mods = {
        [styles.fullWidth]: isFullWidth,
        [styles[size]]: size,
    };

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (withEventChange) onChange(event);
        else onChange(event.target.value);
    };

    // if (isReadOnly) return <Text dataTestId={`${dataTestId}ReadonlyText`}>{value}</Text>;

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

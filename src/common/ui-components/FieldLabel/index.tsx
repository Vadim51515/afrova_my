import { type FC } from 'react';
import classNames from 'classnames';

import { Text } from '../Text';
import { type IFieldLabelProps } from './types';
import styles from './styles.module.scss';

export const FieldLabel: FC<IFieldLabelProps> = ({
    label,
    isRequired,
}) => {
    console.log();

    return (
        <Text
            marginBottom={4}
            mix={classNames(styles.label, isRequired && styles.required)}
        >
            {label}

            {' '}

        </Text>
    );
};

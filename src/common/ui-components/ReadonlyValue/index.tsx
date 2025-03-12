import { type FC } from 'react';

import { Text } from '../Text';
import { type IReadonlyValueProps } from './types';
import styles from './styles.module.scss';

export const ReadonlyValue: FC<IReadonlyValueProps> = ({ value = '' }) => (
    <Text mix={styles.readonlyValue}>{value}</Text>
);

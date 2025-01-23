import { type FC } from 'react';

import { Text } from '../../../ui-components/Text';
import styles from '../styles.module.scss';
import { BotStatus } from './BotStatus';
import { type IBotItemProps } from '../types';

export const BotItem: FC<IBotItemProps> = ({ data }) => {
    const {
        name,
        status,
    } = data;

    return (
        <div className={styles.botItemContainer}>
            <div className={styles.botItemContent}>
                <Text>{name}</Text>

                <BotStatus status={status} />

            </div>

            <button>Редактировать</button>
        </div>
    );
};

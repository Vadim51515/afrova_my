import { type FC } from 'react';
import classNames from 'classnames';

import { capitalizeFirstLetter } from '../../../functions/capitalizeFirstLetter';
import styles from '../styles.module.scss';
import { type IBotStatus } from '../types';

export const BotStatus: FC<IBotStatus> = ({ status }) => {
    const curStatusStyles = styles[`botItem${capitalizeFirstLetter(status)}Status`];

    return <div className={classNames(styles.botItemStatus, curStatusStyles)} />;
};

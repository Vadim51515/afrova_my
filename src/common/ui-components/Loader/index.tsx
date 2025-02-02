import { type FC } from 'react';
import classNames from 'classnames';

import IconLoader from '../../../assets/icons/loader.svg';
import { type ILoaderProps } from './types';
import styles from './styles.module.scss';

export const Loader: FC<ILoaderProps> = ({
    mix,
    isWithBackground = true,
}) => {
    const mods = { [styles.withBackground]: isWithBackground };

    return (
        <div className={classNames(styles.loaderContainer, mods, [mix])}>
            <IconLoader className={styles.loaderSpinner} />
        </div>
    );
};

import classNames from 'classnames';

import { type CFC } from '../../commonTypes';
import { type IButtonProps } from './types';
import styles from './styles/index.module.scss';
import patternsStyles from './styles/patterns.module.scss';
import sizeStyles from './styles/size.module.scss';

export const Button: CFC<IButtonProps> = ({
    children,
    pattern = 'common',
    size = 'md',
    mix,
    isFullWidth,
    onClick,
}) => {
    console.log();

    const mods = {
        [patternsStyles[pattern]]: pattern,
        [sizeStyles[size]]: size,
        [styles.fullWidth]: isFullWidth,
    };

    return (
        <button
            className={classNames(styles.button, mods, [mix])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

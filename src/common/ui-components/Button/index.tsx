import { type CFC } from '../../commonTypes';
import { type IButtonProps } from './types';
import styles from './styles/index.module.scss';
import patternsStyles from './styles/patterns.module.scss';
import sizeStyles from './styles/size.module.scss';

export const Button: CFC<IButtonProps> = ({
    children,
    pattern = 'common',
    size = 'md',
}) => {
    console.log();

    const generatedStyles = `${styles.button} ${patternsStyles[pattern]} ${sizeStyles[size]}`;

    console.log('generatedStyles', generatedStyles);

    return (
        <button className={generatedStyles}>
            {children}
        </button>
    );
};

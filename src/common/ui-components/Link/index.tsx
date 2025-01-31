import { Link as RouteLink } from 'react-router-dom';
import classNames from 'classnames';

import { type CFC } from '../../commonTypes';
import { type ILinkProps } from './types';
import styles from './styles.module.scss';

export const Link: CFC<ILinkProps> = ({
    children,
    mix,
    href,
    isRoute = true,
    pattern = 'common',
    ...otherProps
}) => {
    console.log();

    const commonProps = {
        ...otherProps,
        className: classNames(styles.link, styles[pattern], mix),
    };

    const linkProps = {
        ...commonProps,
        href,
    };

    const routeLinkProps = {
        ...commonProps,
        to: href,
    };

    if (isRoute) {
        return (
            <RouteLink {...routeLinkProps}>
                {children}
            </RouteLink>
        );
    }

    return (
        <a{...linkProps}>
            {children}
        </a>
    );
};

import React, { type FC } from 'react';

import logo from '../../assets/images/logo.png';
import { Link } from '../../common/ui-components/Link';
import { HeaderBtn } from './components/HeaderBtn';
import styles from './Header.module.scss';
interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = () => (
    <header className={styles.header}>
        <Link href={'/home'}>
            <img
                alt='logo'
                className={styles.logo}
                src={logo}
            />
        </Link>

        <HeaderBtn />
    </header>
);

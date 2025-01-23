import React, { type FC } from 'react';

import logo from '../../../assets/images/logo.png';
import { ProfileBtn } from './components/ProfileBtn';
import styles from './Header.module.scss';
interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = () => (
    <header className={styles.header}>
        <img
            alt='logo'
            className={styles.logo}
            src={logo}
        />

        {/* <ProfileBtn /> */}
    </header>
);

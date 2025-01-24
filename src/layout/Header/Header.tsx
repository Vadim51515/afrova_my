import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';
import { HeaderBtn } from './components/HeaderBtn';
import { isLoginAppInfoSelector } from '../AppInfo/redux/selectors';
import styles from './Header.module.scss';
interface IHeaderProps {
    className?: string;
}

export const Header: FC<IHeaderProps> = () => {
    const test = useSelector(isLoginAppInfoSelector);
    console.log('test', test);

    return (
        <header className={styles.header}>
            <img
                alt='logo'
                className={styles.logo}
                src={logo}
            />

            <HeaderBtn />
        </header>
    );
};

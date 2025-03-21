import React, { type FC } from 'react';
import classNames from 'classnames';

import { Sidebar } from '../common/components/Sidebar';
import { Header } from '../layout/Header';
import { AppRouter } from './providers/router/ui/AppRouter/AppRouter';
import styles from './App.module.scss';

export const App: FC = () => (
    <div className={classNames('app_dark_theme', styles.app)}>
        <Header />

        <div className={styles.content}>
            <Sidebar />

            <AppRouter />
        </div>
    </div>
);

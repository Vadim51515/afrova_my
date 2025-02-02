import { useEffect } from 'react';

import { store } from '../../app/store';
import { useActions } from '../../common/hooks/useActions';
import { Text } from '../../common/ui-components/Text';
import { Avatar } from './components/Avatar';
import { Fields } from './components/Fields';
import { profileActions } from './redux/actions';
import { profileReducer } from './redux/slice';
import styles from './styles.module.scss';

store.addModule('profile', profileReducer);

export default () => {
    const { getProfileData } = useActions(profileActions);

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Text>Profile</Text>

            <div className={styles.content}>
                <Avatar />

                <Fields />
            </div>
        </div>
    );
};

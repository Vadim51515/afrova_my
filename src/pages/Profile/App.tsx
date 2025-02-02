import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { store } from '../../app/store';
import { useActions } from '../../common/hooks/useActions';
import { Loader } from '../../common/ui-components/Loader';
import { Avatar } from './components/Avatar';
import { Fields } from './components/Fields';
import { Title } from './components/Title';
import { profileActions } from './redux/actions';
import { isLoadingSelector } from './redux/selectors';
import { profileReducer } from './redux/slice';
import styles from './styles.module.scss';

store.addModule('profile', profileReducer);

export default () => {
    const { getProfileData } = useActions(profileActions);

    const isLoading = useSelector(isLoadingSelector);

    useEffect(() => {
        getProfileData();
    }, []);

    if (isLoading) return <Loader isWithBackground={false} />;

    return (
        <div className={styles.wrapper}>
            <Title />

            <div className={styles.content}>
                <Avatar />

                <Fields />
            </div>
        </div>
    );
};

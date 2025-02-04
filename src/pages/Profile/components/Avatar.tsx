import { useSelector } from 'react-redux';

import styles from '../styles.module.scss';
import { avatarProfileSelector } from '../redux/selectors';

export const Avatar = () => {
    const avatar = useSelector(avatarProfileSelector);

    return (
        <div className={styles.avatarContainer}>
            <img
                alt="Аватарка пользователя"
                className={styles.avatar}
                src={avatar}
            />
        </div>
    );
};

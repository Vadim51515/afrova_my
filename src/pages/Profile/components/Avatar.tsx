import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import styles from '../styles.module.scss';
import { profileActions } from '../redux/actions';
import { avatarProfileSelector } from '../redux/selectors';

export const Avatar = () => {
    const avatar = useSelector(avatarProfileSelector);

    const { uploadProfileAvatar } = useActions(profileActions);

    return (
        <div className={styles.avatarContainer}>
            <img
                alt="Аватарка пользователя"
                className={styles.avatar}
                src={avatar}
            />

            <input
                onChange={(event) => { uploadProfileAvatar(event.currentTarget.files); }}
                type="file"
            />
        </div>
    );
};

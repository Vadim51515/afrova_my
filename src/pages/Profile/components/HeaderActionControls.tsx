import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { ActionControls } from '../../../common/ui-components/ActionControls';
import styles from '../styles.module.scss';
import { Title } from './Title';
import { profileActions } from '../redux/actions';
import { profileFormIsReadonlySelector } from '../redux/selectors';

export const HeaderActionControls = () => {
    const profileFormIsReadonly = useSelector(profileFormIsReadonlySelector);

    const {
        editForm,
        cancelEditForm,
        saveForm,
    } = useActions(profileActions);

    return (
        <div className={styles.profileHeader}>
            <Title />

            <ActionControls
                dataTestId='ProfileActionControls'
                isReadonly={profileFormIsReadonly}
                onCancel={cancelEditForm}
                onEdit={editForm}
                onSave={saveForm}
            />
        </div>
    );
};

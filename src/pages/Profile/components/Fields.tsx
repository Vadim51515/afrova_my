import styles from '../styles.module.scss';
import { FirstName } from './Fields/FirstName';
import { LastName } from './Fields/LastName';
import { MiddleName } from './Fields/MiddleName';

export const Fields = () => {
    const sdfds = 123;

    return (
        <div className={styles.fieldsWrapper}>
            <div className={styles.fieldsRow}>
                <FirstName />

                <MiddleName />

                <LastName />
            </div>

            <div className={styles.fieldsRow}>
                <FirstName />

                <MiddleName />

                <LastName />
            </div>
        </div>
    );
};

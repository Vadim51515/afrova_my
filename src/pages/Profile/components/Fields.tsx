import styles from '../styles.module.scss';
import { BirthDate } from './Fields/BirthDate';
import { FirstName } from './Fields/FirstName';
import { LastName } from './Fields/LastName';
import { MiddleName } from './Fields/MiddleName';

export const Fields = () => (
    <div className={styles.fieldsWrapper}>
        <div className={styles.fieldsRow}>
            <FirstName />

            <MiddleName />

            <LastName />
        </div>

        <div className={styles.fieldsRow}>
            <BirthDate />
        </div>
    </div>
);

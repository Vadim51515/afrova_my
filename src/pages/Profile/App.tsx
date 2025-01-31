import { Text } from '../../common/ui-components/Text';
import styles from './styles.module.scss';

export default () => {
    console.log();

    return (
        <div className={styles.wrapper}>
            <Text>Profile</Text>

            <div className={styles.content}>
                123
            </div>
        </div>
    );
};

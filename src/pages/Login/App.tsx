import { Input } from '../../common/ui-components/Input/Input';
import { Text } from '../../common/ui-components/Text';
import styles from './styles.module.scss';

export default () => (
    <div className={styles.wrapper}>

        <Text
            marginBottom={40}
            tagName='h1'
        >
            Авторизация123
        </Text>

        {' '}

        <div className={styles.inputsWrapper}>
            <Input
                label='Логин'
                isRequired
                mix
            />

            <Input
                label='Пароль'
                isRequired
            />
        </div>

    </div>
);

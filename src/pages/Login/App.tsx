import { Button } from '../../common/ui-components/Button';
import { Field } from '../../common/ui-components/Field';
import { Text } from '../../common/ui-components/Text';
import styles from './styles.module.scss';

export default () => (
    <div className={styles.wrapper}>
        <Text
            marginBottom={40}
            tagName='h1'
        >
            Авторизация
        </Text>

        <div className={styles.content}>
            <div className={styles.inputsWrapper}>
                <Field
                    fieldName='login'
                    fieldType='input'
                    label='Логин'
                    onChange={() => {}}
                    value={'sdf'}
                    isRequired
                />

                <Field
                    fieldName='password'
                    fieldType='input'
                    label='Пароль'
                    onChange={() => {}}
                    value={'sdf'}
                    isRequired
                />
            </div>

            <Button isFullWidth>Войти</Button>
        </div>
    </div>
);

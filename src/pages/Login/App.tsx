import { type TReducersList } from '../../app/store/types';
import { useAsyncReducer } from '../../common/hooks/useAsyncReducer';
import { Button } from '../../common/ui-components/Button';
import { Field } from '../../common/ui-components/Field';
import { Text } from '../../common/ui-components/Text';
import { LoginInput } from './components/LoginInput';
import { loginReducer } from './redux/slice';
import styles from './styles.module.scss';

const reducers: TReducersList = { login: loginReducer };

export default () => {
    useAsyncReducer(reducers, true);

    return (
        <div className={styles.wrapper}>
            <Text
                marginBottom={40}
                tagName='h1'
            >
                Авторизация
            </Text>

            <div className={styles.content}>
                <div className={styles.inputsWrapper}>
                    <LoginInput />

                    <Field
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
};

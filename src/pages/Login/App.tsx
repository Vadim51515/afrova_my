import { store } from '../../app/store';
import { useActions } from '../../common/hooks/useActions';
import { Button } from '../../common/ui-components/Button';
import { Text } from '../../common/ui-components/Text';
import { LoginInput } from './components/LoginInput';
import { PasswordInput } from './components/PasswordInput';
import { loginActions } from './redux/actions';
import { loginReducer } from './redux/slice';
import styles from './styles.module.scss';

store.addModule('login', loginReducer);

export default () => {
    const { login } = useActions(loginActions);

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

                    <PasswordInput />
                </div>

                <Button
                    onClick={login}
                    isFullWidth
                >
                    Войти
                </Button>
            </div>
        </div>
    );
};

import {
    useEffect,
    useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { store } from '../../app/store';
import { lStorage } from '../../common/functions/localStorage';
import { useActions } from '../../common/hooks/useActions';
import { Button } from '../../common/ui-components/Button';
import { Text } from '../../common/ui-components/Text';
import { isLoginAppInfoSelector } from '../../layout/AppInfo/redux/selectors';
import type { IAuthData } from '../../layout/AppInfo/redux/types';
import { LoginInput } from './components/LoginInput';
import { PasswordInput } from './components/PasswordInput';
import { loginActions } from './redux/actions';
import { errorSelector } from './redux/selectors';
import { loginReducer } from './redux/slice';
import styles from './styles.module.scss';

store.addModule('login', loginReducer);

export default () => {
    const { login } = useActions(loginActions);

    const error = useSelector(errorSelector);
    const isLogin = useSelector(isLoginAppInfoSelector);

    const navigate = useNavigate();

    useLayoutEffect(() => {
        console.log('lStorage appInfo', lStorage.getJson<IAuthData>('authData'));
        if (isLogin) navigate('/');
    }, [isLogin]);

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

                {error && <Text isError>{error}</Text>}
            </div>
        </div>
    );
};

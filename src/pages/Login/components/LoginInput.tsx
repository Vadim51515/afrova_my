import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { useParamSelector } from '../../../common/hooks/useParamSelector';
import { Field } from '../../../common/ui-components/Field';
import { loginActions } from '../redux/actions';
import {
    getFormErrors,
    loginSelector,
} from '../redux/selectors';

export const LoginInput = () => {
    const { setLogin } = useActions(loginActions);

    const login = useSelector(loginSelector);
    const loginError = useParamSelector(getFormErrors, 'login');

    return (
        <Field
            errors={loginError}
            fieldType='input'
            label='Логин'
            onChange={setLogin}
            value={login}
            isRequired
        />
    );
};

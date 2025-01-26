import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { useParamSelector } from '../../../common/hooks/useParamSelector';
import { Field } from '../../../common/ui-components/Field';
import { loginActions } from '../redux/actions';
import {
    getFormError,
    passwordSelector,
} from '../redux/selectors';

export const PasswordInput = () => {
    const { setPassword } = useActions(loginActions);

    const password = useSelector(passwordSelector);
    const passwordError = useParamSelector(getFormError, 'password');

    return (
        <Field
            errors={[passwordError]}
            fieldType='input'
            label='Пароль'
            onChange={setPassword}
            value={password}
            isRequired
        />

    );
};

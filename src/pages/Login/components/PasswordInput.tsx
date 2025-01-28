import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { useParamSelector } from '../../../common/hooks/useParamSelector';
import { Field } from '../../../common/ui-components/Field';
import { loginActions } from '../redux/actions';
import {
    getFormErrors,
    passwordSelector,
} from '../redux/selectors';

export const PasswordInput = () => {
    const { setPassword } = useActions(loginActions);

    const password = useSelector(passwordSelector);
    const passwordErrors = useParamSelector(getFormErrors, 'password');

    return (
        <Field
            errors={passwordErrors}
            fieldType='input'
            label='Пароль'
            onChange={setPassword}
            value={password}
            isRequired
        />

    );
};

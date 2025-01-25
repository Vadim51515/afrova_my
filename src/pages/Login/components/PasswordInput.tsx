import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { Field } from '../../../common/ui-components/Field';
import { loginActions } from '../redux/actions';
import { passwordSelector } from '../redux/selectors';

export const PasswordInput = () => {
    const { setPassword } = useActions(loginActions);

    const password = useSelector(passwordSelector);

    return (
        <Field
            fieldType='input'
            label='Пароль'
            onChange={setPassword}
            value={password}
            isRequired
        />

    );
};

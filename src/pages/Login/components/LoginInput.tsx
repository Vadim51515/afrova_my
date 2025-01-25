import { useSelector } from 'react-redux';

import { useActions } from '../../../common/hooks/useActions';
import { Field } from '../../../common/ui-components/Field';
import { loginActions } from '../redux/actions';
import { loginSelector } from '../redux/selectors';

export const LoginInput = () => {
    const { setLogin } = useActions(loginActions);

    const login = useSelector(loginSelector);

    console.log('loginSelector', login);

    return (
        <Field
            fieldType='input'
            label='Логин'
            onChange={setLogin}
            value={login}
            isRequired
        />

    );
};

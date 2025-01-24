import { useSelector } from 'react-redux';

import { isLoginAppInfoSelector } from '../../AppInfo/redux/selectors';
import { LoginBtn } from './LoginBtn';
import { ProfileBtn } from './ProfileBtn';

export const HeaderBtn = () => {
    const isLogin = useSelector(isLoginAppInfoSelector);

    if (isLogin) return <ProfileBtn />;

    return <LoginBtn />;
};

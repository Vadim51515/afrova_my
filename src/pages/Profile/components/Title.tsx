import { useSelector } from 'react-redux';

import { Text } from '../../../common/ui-components/Text';
import { userNameAppInfoSelector } from '../../../layout/AppInfo/redux/selectors';

export const Title = () => {
    const name = useSelector(userNameAppInfoSelector);

    return <Text tagName='h1'>{`Профиль пользователя: ${name}`}</Text>;
};

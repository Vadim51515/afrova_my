import { useSelector } from 'react-redux';

import { Text } from '../../../common/ui-components/Text';
import { profileTitleSelector } from '../redux/selectors';

export const Title = () => {
    const title = useSelector(profileTitleSelector);

    return (
        <Text
            marginBottom={20}
            tagName='h1'
        >
            {`Профиль пользователя: ${title}`}
        </Text>
    );
};

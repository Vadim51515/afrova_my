import { RoutePath } from '../../../app/providers/router/config/route';
import { Link } from '../../../common/ui-components/Link';

export const LoginBtn = () => (
    <Link
        href={RoutePath.Login}
        pattern='primary'
    >
        Авторизация
    </Link>
);

import { Link } from '../../../common/ui-components/Link';

export const LoginBtn = () => {
    const test = 'q34';

    return (
        // <Button>Авторизация</Button>
        <Link
            href={'/login'}
            pattern='primary'
        >
            Авторизация
        </Link>
    );
};

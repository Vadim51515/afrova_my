import { RoutePath } from '../../../app/providers/router/config/route';
import { Link } from '../../../common/ui-components/Link';

export const ProfileBtn = () => {
    // const aaaa = useSelector();
    const a = 1;

    return (
        <Link
            href={RoutePath.Profile}
            pattern='primary'
        >
            profile
        </Link>
    );
};

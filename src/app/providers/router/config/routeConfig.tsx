import { HomePage } from '../../../../pages/Home';
import { LoginPage } from '../../../../pages/Login';
import { ProfilePage } from '../../../../pages/Profile';
import {
    AppRoutes,
    RoutePath,
    type TAppRoutesProps,
} from './route';

export const routeConfig: Record<AppRoutes, TAppRoutesProps> = {
    [AppRoutes.Home]: {
        path: RoutePath.Home,
        element: <HomePage />,
    },

    [AppRoutes.Login]: {
        path: RoutePath.Login,
        element: <LoginPage />,
    },

    [AppRoutes.Profile]: {
        path: RoutePath.Profile,
        element: <ProfilePage />,
    },
};

import { HomePage } from '../../../../pages/Home';
import {
    AppRoutes,
    RoutePath,
    type TAppRoutesProps,
} from './route';

export const routeConfig: Record<AppRoutes, TAppRoutesProps> = { [AppRoutes.Main]: {
    path: RoutePath.Home,
    element: <HomePage />,
} };

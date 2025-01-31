import { type RouteProps } from 'react-router';

export enum AppRoutes {
    Home = 'home',
    Login = 'login',
    Profile = 'profile',
}

export type TAppRoutesProps = RouteProps & {
    isAuthOnly?: boolean;
};

export const RoutePath = {
    Home: '/home',
    Login: '/login',
    Profile: '/profile',
};

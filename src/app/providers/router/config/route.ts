import { type RouteProps } from 'react-router';

export enum AppRoutes {
    Main = 'main',
}

export type TAppRoutesProps = RouteProps & {
    isAuthOnly?: boolean;
};

export const RoutePath = { Home: '/home' };

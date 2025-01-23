import React, {
    Suspense,
    useCallback,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';

import { type TAppRoutesProps } from '../../config/route';
import { routeConfig } from '../../config/routeConfig';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path,
        element,
        isAuthOnly,
    }: TAppRoutesProps) => (
        <Route
            key={path}
            path={path}
            element={isAuthOnly
                ? null
                // ? <RequireAuth roles={roles}>{element}</RequireAuth>
                : element}
        />
    ), []);

    return (
        // TODO - Написать Loading
        <Suspense fallback={'Loading'}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};

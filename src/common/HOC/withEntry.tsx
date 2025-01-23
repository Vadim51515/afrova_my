import {
    Suspense,
    useEffect,
} from 'react';

import { type TWithEntry } from './types';

export const withEntry: TWithEntry = () => (ComponentLazy) => (props) => {
    useEffect(() => {}, []);

    return (
        <Suspense>
            <ComponentLazy {...props} />
        </Suspense>
    );
};

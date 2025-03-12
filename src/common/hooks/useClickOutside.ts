import {
    useEffect,
    useRef,
} from 'react';

import { type Func } from '../commonTypes';

export const useClickOutside = <T extends HTMLElement>(action: Func) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                action();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [action]);

    return ref;
};

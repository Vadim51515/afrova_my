import {
    useEffect,
    useRef,
} from 'react';

import { type Func } from '../commonTypes';

export const useClickOutside = (action: Func) => {
    const ref = useRef<HTMLElement>(null);

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
    }, [
        ref,
        action,
    ]);

    return ref;
};

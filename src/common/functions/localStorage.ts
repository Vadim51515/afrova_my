import { type Nullable } from '../commonTypes';

export const lStorage = (() => {
    let is = true;
    try {
        is = !!localStorage;
    } catch {
        is = false;
    }

    return {
        dispatchEvent(
            key: string | undefined,
            oldValue: Nullable<string>,
            newValue: string | undefined,
        ) {
            const event = new StorageEvent('storage', {
                bubbles: true,
                cancelable: false,
                key,
                oldValue,
                newValue,
            });

            window.dispatchEvent(event);
        },

        get(key: string): Nullable<string> {
            if (!is) return null;

            return localStorage.getItem(key);
        },

        getJson<T = unknown>(key: string, defaultValue: Nullable<T> = null): Nullable<T> {
            if (!is) return null;

            const value = localStorage.getItem(key);

            try {
                return value
                    ? JSON.parse(value)
                    : defaultValue;
            } catch (e) {
                return value as T || defaultValue;
            }
        },

        set(key: string, value: unknown): void {
            if (!is) return;
            const oldValue = this.get(key);

            const newValue = typeof value === 'string'
                ? value
                : JSON.stringify(value);

            localStorage.setItem(key, newValue);

            this.dispatchEvent(key, oldValue, newValue);
        },

        setJson(key: string, value: unknown): void {
            this.set(key, value);
        },

        remove(key: string): void {
            if (!is) return;

            const oldValue = this.get(key);

            localStorage.removeItem(key);

            this.dispatchEvent(key, oldValue, undefined);
        },

        clear(): void {
            if (!is) return;

            const oldValue = this.length();

            localStorage.clear();

            this.dispatchEvent(undefined, String(oldValue), undefined);
        },

        getIs: () => is,

        key(index: number): Nullable<string> {
            if (!is) return null;

            return localStorage.key(index);
        },

        length(): number {
            return is
                ? localStorage.length
                : 0;
        },
    };
})();

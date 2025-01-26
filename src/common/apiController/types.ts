export interface IResponseData<RESULT = unknown> {
    status: 'ok' | 'validation-error' | 'error' | 'runtime-error' | 'not-found' | 'session-expired' | 'access-error';
    result?: RESULT;
    error?: string;
    // formErrors?: TFormErrors;
    redirect?: string;
    warning?: string;
    /** @deprecated */
    message?: string;
}

export type TData<D = never> = D extends never
    ? Record<string, unknown>
    : D;

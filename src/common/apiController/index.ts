import axios, { type AxiosInstance } from 'axios';

import {
    type IResponseData,
    type TData,
} from './types';

export class ApiController {
    public controller: AxiosInstance;
    public get: ReturnType<typeof this.request>;
    public delete: ReturnType<typeof this.request>;
    public post: ReturnType<typeof this.requestWithData>;
    public put: ReturnType<typeof this.requestWithData>;
    public patch: ReturnType<typeof this.requestWithData>;

    constructor() {
        this.controller = axios.create({ baseURL: __API__ });
        this.get = this.request('get');
        this.delete = this.request('delete');
        this.post = this.requestWithData('post');
        this.put = this.requestWithData('put');
        this.patch = this.requestWithData('patch');
    }

    private request(method: 'get' | 'delete') {
        return <R>(url: string) => (
            this.controller[method]<IResponseData<R>>(url)
                .then((response) => response));
    }

    private requestWithData(method: 'post' | 'put' | 'patch') {
        return <R, D = never>(url: string, data?: TData<D>) => (
            this.controller[method]<R>(url, data)
                .then((response) => response));
    }
}

export const API_CONTROLLER = new ApiController();

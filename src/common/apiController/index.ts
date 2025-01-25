import axios, { type AxiosRequestConfig } from 'axios';

// import { config } from './config';
// import { getController } from './getController';
// import type { TResponseData } from '../types/types';
// import {
//     type TController,
//     type TData,
// } from './types';

export class ApiController {
    public controller: TController;
    public requestList: Record<string, AxiosRequestConfig> = {};
    public get: ReturnType<typeof this.request>;
    public delete: ReturnType<typeof this.request>;
    public post: ReturnType<typeof this.requestWithData>;
    public put: ReturnType<typeof this.requestWithData>;
    public patch: ReturnType<typeof this.requestWithData>;

    constructor() {
        this.controller = axios.create({ baseURL: __API__ });
        this.requestList = this.controller.requestList;
        this.get = this.request('get');
        this.delete = this.request('delete');
        this.post = this.requestWithData('post');
        this.put = this.requestWithData('put');
        this.patch = this.requestWithData('patch');
    }

    private request(method: 'get' | 'delete') {
        return <R>(url: string) => (
            this.controller[method]<TResponseData<R>>(url)
                .then((response) => response));
    }

    private requestWithData(method: 'post' | 'put' | 'patch') {
        return <R, D = never>(url: string, data?: TData<D>) => (
            this.controller[method]<TResponseData<R>>(url, data)
                .then((response) => response));
    }
}

export const API_CONTROLLER = new ApiController();

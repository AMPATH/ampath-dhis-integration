import { AxiosResponse, AxiosRequestConfig } from 'axios';
import btoa from 'btoa';

import { BaseHttpClient } from './baseHttpClient';
import { ETL_BASE_URL, ETL_USERNAME, ETL_PASSWORD } from '../utils/config';

const token = btoa(ETL_USERNAME + ':' + ETL_PASSWORD);

export default class ETLRestClient extends BaseHttpClient {
	constructor() {
		super(ETL_BASE_URL);
		this.initializeResponseInterceptor();
		this.initializeRequestInterceptor();
	}

	private initializeResponseInterceptor = () => {
		this.axios.interceptors.response.use(this.handleResponse, this.handleError);
	};

	private initializeRequestInterceptor = () => {
		this.axios.interceptors.request.use(this.handleRequest, this.handleError);
	};

	private handleRequest = (config: AxiosRequestConfig) => {
		config.headers['Authorization'] = 'Basic ' + token;

		return config;
	};

	private handleResponse = ({ data }: AxiosResponse) => data;
}

import btoa from 'btoa';
import https from 'https';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

import { BaseHttpClient } from './baseHttpClient';
import { DHIS_BASE_URL, DHIS_USERNAME, DHIS_PASSWORD } from '../utils/config';

const token = btoa(DHIS_USERNAME + ':' + DHIS_PASSWORD);

// TODO
// this has serious security implications.
// Anything you send to the peer will still be encrypted,
// but it becomes much easier to mount a man-in-the-middle attack,
// i.e. your data will be encrypted to the peer but the peer itself is not the server you think it is!
const agent = new https.Agent({
	rejectUnauthorized: false,
	keepAlive: true
});

export default class DHISRestClient extends BaseHttpClient {
	constructor() {
		super(DHIS_BASE_URL);
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
		config.httpsAgent = agent;

		return config;
	};

	private handleResponse = ({ data }: AxiosResponse) => data;
}

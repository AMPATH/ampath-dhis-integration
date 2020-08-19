import axios, { AxiosInstance } from 'axios';

export abstract class BaseHttpClient {
	protected readonly axios: AxiosInstance;

	constructor(baseURL: any) {
		this.axios = axios.create({
			baseURL: baseURL,
			responseType: 'json',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	protected handleError = (error: any[]): Promise<string> =>
		Promise.reject(error);
}

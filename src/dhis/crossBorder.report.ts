import DHISRestClient from '../common/dhisRestClient';

export default class CrossBorderReport extends DHISRestClient {
	private dataElementsUrl = '/dataElements';

	public getDataElements(): void {
		this.axios
			.get(this.dataElementsUrl)
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	}
}

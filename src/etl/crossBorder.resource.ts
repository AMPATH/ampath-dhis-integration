import ETLRestClient from '../common/etlRestClient';

export default class CrossBorderResource extends ETLRestClient {
	private aggregateUrl = '/hiv-summary-indicators';

	public getAggregateReport(params: any): Promise<any> {
		return this.axios
			.get(this.constructAggregateUrl(params))
			.then((data: any) => console.log(data))
			.catch((error: any) => {
				console.error(error);
			});
	}

	private constructAggregateUrl(params: any): string {
		return (
			this.aggregateUrl +
			'?endDate=' +
			params.endDate +
			'&startDate=' +
			params.startDate +
			'&locationUuids=' +
			params.locationUuids +
			'&indicators=' +
			params.indicators
		);
	}
}

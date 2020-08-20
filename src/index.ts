import CrossBorderResource from './etl/crossBorder.resource';

const cb = new CrossBorderResource();

// to ensure it's working well
const params = {
	endDate: '2020-08-19T13:25:02+03:00',
	startDate: '2020-07-19T13:25:02+03:00',
	locationUuids: '08feae7c-1352-11df-a1f1-0026b9348838',
	indicators:
		'on_arvs_first_line,on_arvs,on_arvs_second_line,newly_on_second_line'
};

cb.getAggregateReport(params);

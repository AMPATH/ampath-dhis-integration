import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
	case 'test':
		path = `${__dirname}/../../.env.test`;
		break;
	default:
		path = `${__dirname}/../../.env`;
}
dotenv.config({ path: path });

export const ETL_BASE_URL = process.env.ETL_REST_BASE_URL;
export const ETL_USERNAME = process.env.ETL_REST_USERNAME;
export const ETL_PASSWORD = process.env.ETL_REST_PASSWORD;

export const DHIS_BASE_URL = process.env.DHIS_BASE_URL;
export const DHIS_USERNAME = process.env.DHIS_USERNAME;
export const DHIS_PASSWORD = process.env.DHIS_PASSWORD;

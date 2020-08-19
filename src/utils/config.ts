import * as dotenv from 'dotenv';

dotenv.config();

const path = `${__dirname}/../../.env`;

dotenv.config({ path: path });

export const ETL_BASE_URL = process.env.ETL_REST_BASE_URL;
export const ETL_USERNAME = process.env.ETL_REST_USERNAME;
export const ETL_PASSWORD = process.env.ETL_REST_PASSWORD;

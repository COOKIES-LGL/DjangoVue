/**
 * Attention: This file will run in both node and browser environments.
 * Only common codes are supported here.
 */
export const ENVIRONMENT: string = (process.env.env as string) || 'test';

const HOST: string = ENVIRONMENT === 'live' ? 'https://admin.pap.shopee.io' : 'http://localhost:8000';
const BASE_URL: string = process.env.BASE_URL || '/';
export const ENV = {
  ENVIRONMENT,
  HOST,
  BASE_URL,
};

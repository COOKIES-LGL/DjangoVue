/**
 * Attention: This file will run in both node and browser environments.
 * Only common codes are supported here.
 */
export let REGION: string = process.env.cid as string || 'sg';
export let ENVIRONMENT: string = process.env.env as string || 'test';

//Enable local settings
if (process.env.hasLocalEnv) {
  const localEnvironment = require('./environment.local');
  REGION = localEnvironment.REGION || REGION;
  ENVIRONMENT = localEnvironment.ENVIRONMENT || ENVIRONMENT;
}

const HOST: string = ENVIRONMENT === 'live' ? 'https://admin.pap.shopee.io' : 'https://admin.pap.test.shopee.io';

export const ENV = {
  REGION,
  ENVIRONMENT,
  HOST,
};


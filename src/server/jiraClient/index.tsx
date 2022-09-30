import { Fetcher } from 'openapi-typescript-fetch';

import { paths } from '../../generated/jiraApiTypes';

interface Config {
  baseUrl: string;
  authToken: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getFetcher = (config: Config) => {
  const fetcher = Fetcher.for<paths>();
  fetcher.configure({
    baseUrl: config.baseUrl,
    init: {
      headers: {
        Authorization: `Basic ${btoa(config.authToken)}`,
      },
    },
  });

  return fetcher;
};

export default getFetcher;

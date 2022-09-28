import { z } from 'zod';

import getFetcher from '../jiraClient';

import { createRouter } from './context';

const exampleRouter = createRouter().query('listMyIssues', {
  input: z.object({
    authToken: z.string(),
    jiraUrl: z.string(),
  }),

  resolve: async ({ input }) => {
    const search = getFetcher({
      baseUrl: input.jiraUrl,
      authToken: input.authToken,
    })
      .path('/rest/api/3/search')
      .method('get')
      .create();

    const result = await search({ jql: 'assignee = currentUser()' });

    return result.data;
  },
});

export default exampleRouter;

import { z } from 'zod';

import getFetcher from '../jiraClient';

import { createRouter } from './context';

const exampleRouter = createRouter().query('listMyIssues', {
  input: z.object({
    authToken: z.string(),
    jiraUrl: z.string(),
    statusFilter: z.string().array().optional(),
  }),

  resolve: async ({ input }) => {
    const search = getFetcher({
      baseUrl: input.jiraUrl,
      authToken: input.authToken,
    })
      .path('/rest/api/3/search')
      .method('get')
      .create();

    const statusIn = input.statusFilter
      ?.map(status => `"${status}"`)
      .join(', ');
    const statusJql = statusIn ? `and status in (${statusIn})` : undefined;

    const searchJql = [
      `assignee=currentUser() and type in (Sub-task, Bug)`,
      statusJql,
    ];

    const result = await search({
      jql: searchJql.filter(item => !!item).join(' '),
    });

    return result.data;
  },
});

export default exampleRouter;

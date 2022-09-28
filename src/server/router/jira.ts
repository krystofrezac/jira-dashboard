import { z } from 'zod';

import { createRouter } from './context';

const exampleRouter = createRouter().query('listMyIssues', {
  input: z.object({
    token: z.string(),
    jiraUrl: z.string(),
  }),

  resolve: async ({ input }) => {
    const queryParams = new URLSearchParams({
      jql: 'assignee in (currentUser())',
    });

    const result = await fetch(
      `https://projektpb.atlassian.net/rest/api/3/search?${queryParams.toString()}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(input.token)}`,
        },
      },
    );

    if (result.status !== 200) throw new Error('Not a 200 status code');
    const body = await result.json();

    return body;
  },
});

export default exampleRouter;

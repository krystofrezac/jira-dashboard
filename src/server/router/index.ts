// src/server/router/index.ts
import superjson from 'superjson';

import { createRouter } from './context';
import jiraRouter from './jira';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('jira.', jiraRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

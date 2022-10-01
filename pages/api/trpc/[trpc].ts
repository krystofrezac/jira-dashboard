// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';

import { env } from '../../../src/env/server.mjs';
import { appRouter } from '../../../src/server/router';
import { createContext } from '../../../src/server/router/context';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }): void => {
          // eslint-disable-next-line no-console
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});

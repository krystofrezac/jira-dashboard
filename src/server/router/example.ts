import { z } from 'zod';

import { createRouter } from './context';

const exampleRouter = createRouter().query('hello', {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve: ({ input }) => ({
    greeting: `Hello ${input?.text ?? 'world'}`,
  }),
});

export default exampleRouter;

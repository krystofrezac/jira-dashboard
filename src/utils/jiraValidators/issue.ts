import { z } from 'zod';

import { parentValidator } from './issueParent';

const issueValidator = z.object({
  id: z.string(),
  key: z.string(),
  fields: z.object({
    parent: parentValidator.optional(),
    issuetype: z.object({ iconUrl: z.string() }),
    summary: z.string(),
  }),
});

export type Issue = z.infer<typeof issueValidator>;

const getIssue = (
  issue: unknown,
): z.infer<typeof issueValidator> | undefined => {
  const parseResult = issueValidator.safeParse(issue);

  if (parseResult.success) return parseResult.data;
  return undefined;
};

export default getIssue;

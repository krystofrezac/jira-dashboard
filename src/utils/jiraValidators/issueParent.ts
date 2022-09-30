import { z } from 'zod';

export const parentValidator = z.object({
  id: z.string(),
  fields: z.object({
    issuetype: z.object({ iconUrl: z.string() }),
    summary: z.string(),
  }),
});

export type IssueParent = z.infer<typeof parentValidator>;

const getIssueParent = (
  parent: unknown,
): z.infer<typeof parentValidator> | undefined => {
  const parseResult = parentValidator.safeParse(parent);

  if (parseResult.success) return parseResult.data;
  return undefined;
};

export default getIssueParent;

import getIssue, { Issue } from '../../../utils/jiraValidators/issue';
import getIssueParent, {
  IssueParent,
} from '../../../utils/jiraValidators/issueParent';
import { Issues } from '../type';

export type GroupedIssues = Map<
  string,
  { parent: IssueParent; issues: Issue[] }
>;

const groupedIssues = (issues: Issues): GroupedIssues => {
  const groupedIssues: GroupedIssues = new Map();

  issues.forEach(rawIssue => {
    const issue = getIssue(rawIssue);
    if (!issue) return;

    const parent = getIssueParent(issue.fields?.parent);
    if (!parent) return;

    const parentId = parent.id;
    if (typeof parentId !== 'string') return;

    const savedParent = groupedIssues.get(parentId);
    if (savedParent) {
      savedParent.issues.push(issue);
      return;
    }

    groupedIssues.set(parentId, { parent, issues: [issue] });
  });

  return groupedIssues;
};

export default groupedIssues;

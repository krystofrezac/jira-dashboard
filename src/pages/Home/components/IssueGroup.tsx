import { FC } from 'react';

import { Card } from '@nextui-org/react';

import Column from '../../../components/elements/flex/Column';
import { Issue as IssueType } from '../../../utils/jiraValidators/issue';
import { IssueParent } from '../../../utils/jiraValidators/issueParent';

import Issue from './Issue';

interface IssueGroupProps {
  parent: IssueParent;
  issues: IssueType[];
}

const IssueGroup: FC<IssueGroupProps> = ({ parent, issues }) => {
  return (
    <Card >
      <Card.Body>
        <Issue
          jiraKey={parent.key}
          summary={parent.fields.summary}
          issueTypeIconUrl={parent.fields.issuetype.iconUrl}
          status={parent.fields.status.name}
        />
        <Column withSpacingLeft='md'>
          {issues.map(issue => (
            <Issue
              key={issue.id}
              jiraKey={issue.key}
              summary={issue.fields.summary}
              issueTypeIconUrl={issue.fields.issuetype.iconUrl}
              status={issue.fields.status.name}
            />
          ))}
        </Column>
      </Card.Body>
    </Card>
  );
};

export default IssueGroup;

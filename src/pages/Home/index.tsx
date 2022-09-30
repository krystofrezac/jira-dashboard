import { Fragment, ReactNode } from 'react';

import { NextPage } from 'next';

import useLocalStorage from '../../hooks/useLocalStorage';
import { LocalStorageKey } from '../../hooks/useLocalStorage/types';
import { trpc } from '../../utils/trpc';

import Issue from './components/Issue';
import groupIssues, { GroupedIssues } from './utils/groupIssues';

const mapIssues = (issues: GroupedIssues): ReactNode[] => {
  const mappedIssues: ReactNode[] = [];

  issues.forEach(({ parent, issues }) => {
    mappedIssues.push(
      <Fragment key={parent.id}>
        <Issue
          name={(parent.fields?.summary as string | undefined) ?? '?'}
          issueTypeIconUrl={parent.fields.issuetype.iconUrl}
        />
        <div style={{ paddingLeft: 20 }}>
          {issues.map(issue => (
            <Issue
              key={issue.id}
              name={issue.fields.summary}
              issueTypeIconUrl={issue.fields.issuetype.iconUrl}
            />
          ))}
        </div>
      </Fragment>,
    );
  });

  return mappedIssues;
};

const HomePage: NextPage = () => {
  const [auth] = useLocalStorage(LocalStorageKey.auth);
  const { data } = trpc.useQuery(
    [
      'jira.listMyIssues',
      { authToken: auth?.authToken ?? '', jiraUrl: auth?.url ?? '' },
    ],
    {
      enabled: !!auth,
    },
  );

  const groupedIssues = groupIssues(data?.issues ?? []);
  const mappedIssues = mapIssues(groupedIssues);

  return <>{mappedIssues}</>;
};

export default HomePage;

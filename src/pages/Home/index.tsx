import { ReactNode } from 'react';

import { NextPage } from 'next';

import Column from '../../components/elements/flex/Column';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LocalStorageKey } from '../../hooks/useLocalStorage/types';
import { trpc } from '../../utils/trpc';

import IssueGroup from './components/IssueGroup';
import StatusFilter from './components/StatusFilter';
import groupIssues, { GroupedIssues } from './utils/groupIssues';

const mapIssues = (issues: GroupedIssues): ReactNode[] => {
  const mappedIssues: ReactNode[] = [];

  issues.forEach(({ parent, issues }) => {
    mappedIssues.push(
      <IssueGroup key={parent.id} parent={parent} issues={issues} />,
    );
  });

  return mappedIssues;
};

const HomePage: NextPage = () => {
  const [auth] = useLocalStorage(LocalStorageKey.auth);
  const [statusFilter, setStatusFilter] = useLocalStorage(
    LocalStorageKey.statusFilter,
  );

  const { data } = trpc.useQuery(
    [
      'jira.listMyIssues',
      {
        authToken: auth?.authToken ?? '',
        jiraUrl: auth?.url ?? '',
        statusFilter: statusFilter?.selectedStatuses,
      },
    ],
    {
      enabled: !!auth,
    },
  );

  const handleStatusFilterChange = (selected: string[]) => {
    setStatusFilter({ selectedStatuses: selected });
  };

  const groupedIssues = groupIssues(data?.issues ?? []);
  const mappedIssues = mapIssues(groupedIssues);

  return (
    <Column gap='md' withSpacing='md'>
      <StatusFilter
        selectedStatuses={statusFilter?.selectedStatuses ?? []}
        onChange={handleStatusFilterChange}
      />
      {mappedIssues}
    </Column>
  );
};

export default HomePage;

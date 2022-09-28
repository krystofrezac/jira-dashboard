import { NextPage } from 'next';

import useLocalStorage from '../hooks/useLocalStorage';
import { LocalStorageKey } from '../hooks/useLocalStorage/types';
import { trpc } from '../utils/trpc';

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

  return <div>ahoj {data?.total}</div>;
};

export default HomePage;

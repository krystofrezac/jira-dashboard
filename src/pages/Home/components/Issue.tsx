import { FC } from 'react';

import useLocalStorage from '../../../hooks/useLocalStorage';
import { LocalStorageKey } from '../../../hooks/useLocalStorage/types';

interface IssueProps {
  jiraKey: string;
  summary: string;
  issueTypeIconUrl: string;
}

const Issue: FC<IssueProps> = ({ jiraKey, summary, issueTypeIconUrl }) => {
  const [auth] = useLocalStorage(LocalStorageKey.auth);
  return (
    <div>
      <a
        href={`${auth?.url}/browse/${jiraKey}`}
        target='_blank'
        rel='noreferrer'
      >
        <img src={issueTypeIconUrl} />
        <span>{summary}</span>
      </a>
    </div>
  );
};

export default Issue;

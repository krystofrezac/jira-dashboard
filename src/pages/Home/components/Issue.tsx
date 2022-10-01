import { FC } from 'react';

import { Text } from '@nextui-org/react';

import Row from '../../../components/elements/flex/Row';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { LocalStorageKey } from '../../../hooks/useLocalStorage/types';

import Status from './Status';

interface IssueProps {
  jiraKey: string;
  summary: string;
  issueTypeIconUrl: string;
  status: string;
  isParent?: boolean;
}

const Issue: FC<IssueProps> = ({
  jiraKey,
  summary,
  issueTypeIconUrl,
  status,
  isParent,
}) => {
  const [auth] = useLocalStorage(LocalStorageKey.auth);
  return (
    <a href={`${auth?.url}/browse/${jiraKey}`} target='_blank' rel='noreferrer'>
      <Row gap='md' centerVertically>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={issueTypeIconUrl} alt='status' />
        <Text b={isParent}>{summary}</Text>
        <Status name={status} />
      </Row>
    </a>
  );
};

export default Issue;

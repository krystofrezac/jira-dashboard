import { FC } from 'react';

import { Badge, Text } from '@nextui-org/react';

import Row from '../../../components/elements/flex/Row';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { LocalStorageKey } from '../../../hooks/useLocalStorage/types';

import Status from './Status';

interface IssueProps {
  jiraKey: string;
  summary: string;
  issueTypeIconUrl: string;
  status: string;
}

const Issue: FC<IssueProps> = ({
  jiraKey,
  summary,
  issueTypeIconUrl,
  status,
}) => {
  const [auth] = useLocalStorage(LocalStorageKey.auth);
  return (
    <a href={`${auth?.url}/browse/${jiraKey}`} target='_blank' rel='noreferrer'>
      <Row gap='md' centerVertically>
        <img src={issueTypeIconUrl} />
        <Text>{summary}</Text>
        <Status name={status} />
      </Row>
    </a>
  );
};

export default Issue;

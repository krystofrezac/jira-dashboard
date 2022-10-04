import { FC } from 'react';

import Row from '../../../components/elements/flex/Row';

import Status from './Status';

const statuses = [
  'Open',
  'To Do',
  'InProgress',
  'CodeReview',
  'Done',
  'DEV',
  'Blocked',
];

interface StatusFilterProps {
  selectedStatuses: string[];

  onChange: (selected: string[]) => void;
}

const StatusFilter: FC<StatusFilterProps> = ({
  selectedStatuses,
  onChange,
}) => {
  const handleClick = (status: string) => {
    if (selectedStatuses.includes(status)) {
      onChange(selectedStatuses.filter(selected => selected !== status));
      return;
    }

    onChange([...selectedStatuses, status]);
  };

  return (
    <Row gap='xs'>
      {statuses.map(status => (
        <Status
          key={status}
          name={status}
          size='md'
          variant={selectedStatuses.includes(status) ? 'default' : 'bordered'}
          onClick={() => handleClick(status)}
        />
      ))}
    </Row>
  );
};

export default StatusFilter;
